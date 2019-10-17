import manyVideoADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

import mbManyVideoADHtml from './mbIndex.html'
import device from 'current-device'

/*
 * PC 多视频广告组件
 */
class ManyVideoAdComponent {
  /** 
   * @constructor PC 多视频广告的构造函数
   * @param adVideoSource {@String 广告视频的视频地址 必须参数}
   * @param adLink {@String 广告视频的链接地址 必须参数}
   * @param adCloseFunction {@Function 关闭广告的点击事件处理函数, 可选参数, 不传则默认关闭广告视频}
   * @param closeText {@String 关闭广告的文字内容, 可选参数, 不传则默认为 '关闭广告'}
   */
  
  constructor (adVideoSource, adCloseFunction, closeText = '关闭广告') {
    this.adVideoSource = adVideoSource
    this.html = parseDom(manyVideoADHtml)
    this.adInterval = null
    this.adCloseFunction = adCloseFunction
    this.html.querySelector('.many-video-ad-close-text').innerText = closeText
    this.adDuration = null    // 视频广告的时长, 用于倒计时, 
    this.player = null
    this.indexVideo = 1  //给广告视频标号
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.many-video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情'
    this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制'
    this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击'
    el.appendChild(this.html) 
  }

  created(player){
    //添加video
    let videos = this.adVideoSource.map((url,index) => {
      return `<video id="many-video-ad-content${index+1}" style="${index === 0?'display: block':'display:none'};width:100%;height:100%" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="${url.adVideo}"></video>`
    })
    this.html.querySelector('.videos').innerHTML = videos.join(' ')

    this.indexVideo = Number(this.indexVideo)
    let indexVideo_ = this.indexVideo
    let adVideoSource_ = this.adVideoSource
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+this.indexVideo)
    let videoAdDetak = this.html.querySelector('.many-video-ad-detail')
    let adDuration_ele = this.html.querySelector('#many-video-ad-duration')
    let self = this
    function getManyVideoAdTime(){
      manyVideoAd_ele.removeEventListener('canplay', getManyVideoAdTime)
      videoAdDetak.href = adVideoSource_[indexVideo_ - 1].adVideoLink
      manyVideoAd_ele.play().then(() => {
        let duration = Math.ceil(manyVideoAd_ele.duration)
        adDuration_ele.innerText = duration
        self.setAdInterval()
      })
      .catch(err => {
        self.html.querySelector('.autoplay-many-video-ad').style.display = 'block'
        self.html.querySelector('.icon-player-play').onclick = () => {     
          self.playManyVideoAd()
          self.html.querySelector('.autoplay-many-video-ad').style.display = 'none'
        }
      })
    }
    //对浏览器会限制，有时会自动播放失败的判断
    var promise = manyVideoAd_ele.play();
    if (promise !== undefined) {
        promise.then(() => {
          manyVideoAd_ele.play() //播放广告
        }).catch(error => {
            document.querySelector('.autoplay-many-video-ad').style.display = 'block'
            manyVideoAd_ele.oncanplay = () => {
                let ad_time = Math.ceil(manyVideoAd_ele.duration)
                document.querySelector('#many-video-ad-duration').innerText = ad_time
            }
        });
    }
    manyVideoAd_ele.addEventListener('canplay', getManyVideoAdTime)
  }

  ready (player, e) {
    this.indexVideo = Number(this.indexVideo)
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+this.indexVideo)
    let self = this
    manyVideoAd_ele.addEventListener('ended', function(event) {
      // self.html.querySelector('.many-video-ad-detail').href=self.adVideoSource[self.indexVideo].adVideoLink
      let flag = self.playNext(self)
      if(flag == '-1'){
        player.play()
      }
    })
    this.html.querySelector('.many-video-ad-close label').onclick = () => {
      if (typeof this.adCloseFunction === 'function') {
        this.adCloseFunction(this)
      } else {
        this.closeManyVideoAd()
      }
    }
  }

  // 视频广告倒计时
  setAdInterval (index) {
    let adDuration_ele = this.html.querySelector('#many-video-ad-duration')
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+this.indexVideo)
    this.adInterval = setInterval(() => {
      let duration = Math.ceil(manyVideoAd_ele.duration)
      let currentTime = Math.ceil(manyVideoAd_ele.currentTime)
      let time = duration - currentTime
      adDuration_ele.innerText = time
      if(time == 1 ){
        clearInterval(this.adInterval)
      }
    }, 1000)
  }

  // 暂停视频广告 
  pauseManyVideoAd () {
    this.clearAdInterval()
    this.html.querySelector('#many-video-ad-content'+this.indexVideo).pause()
  }

  // 播放视频广告
  playManyVideoAd () {
    this.setAdInterval()
    this.html.querySelector('#many-video-ad-content'+this.indexVideo).play()
  }

  // 清除视频广告倒计时
  clearAdInterval () {
    this.adInterval !== null && clearInterval(this.adInterval);
    this.adInterval = null
  }

  // 关闭当前广告并播放下一个视频
  playNext(self){
    if(self.indexVideo >= self.adVideoSource.length){
      self.html.parentNode.removeChild(self.html)
      return -1;
    }
    this.indexVideo = Number(this.indexVideo)
    if(document.getElementById('many-video-ad-content'+this.indexVideo) != null){
      document.getElementById('many-video-ad-content'+this.indexVideo).remove()
    }
    
    let indexVideo_ =  this.indexVideo+1
    self.html.querySelector('.many-video-ad-detail').href=self.adVideoSource[self.indexVideo].adVideoLink
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+indexVideo_)
    let adDuration_ele = this.html.querySelector('#many-video-ad-duration')
    manyVideoAd_ele.style.display = 'block'
    if(this.adVideoSource.length >= this.indexVideo){
      this.indexVideo = this.indexVideo+1
    }

    let duration = Math.ceil(manyVideoAd_ele.duration)
    adDuration_ele.innerText = duration
    self.setAdInterval()
    manyVideoAd_ele.play()
    
    manyVideoAd_ele.addEventListener('ended', function(event) {
      let flag = self.playNext(self)
      //广告结束之后自动播放主视频
      if(flag == '-1'){
        document.getElementById('player-con').getElementsByTagName('video')[0].play()
      }
    })
  }

  // 关闭视频广告
  closeManyVideoAd () {
    this.clearAdInterval()
    this.html.parentNode.removeChild(this.html)
    this.html = null
    //广告结束之后自动播放主视频
    document.getElementById('player-con').getElementsByTagName('video')[0].play()
  }
}

/**
 * 移动端多视频广告组件
 */
class MbManyVideoAdComponent {
  /**
   * @constructor 移动端多视频广告组件
   * @param {String adVideoSource 视频广告播放地址}
   * @param {String adLink 广告链接}
   * @param {Function adCloseFunction 关闭广告按钮点击出发的函数}
   * @param {String closeText 可选参数 关闭按钮中的文字, 默认为 '关闭广告'}
   */
  constructor (adVideoSource,adCloseFunction, closeText = '关闭广告') {
    this.adVideoSource = adVideoSource
    this.html = parseDom(mbManyVideoADHtml)
    this.adInterval = null
    this.adCloseFunction = adCloseFunction
    this.html.querySelector('.many-video-ad-close-text').innerText = closeText
    this.adDuration = null    // 视频广告的时长, 用于倒计时, 
    this.player = null
    this.indexVideo = 1  //给广告视频标号
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.many-video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情'
    this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制'
    this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击'
    el.appendChild(this.html)  
    el.querySelector('.videosmb')
    el.querySelector('.videosmb').setAttribute('preload', 'load')

    // 隐藏 controlbar 
    let controlBar = el.querySelector('.prism-controlbar')
    controlBar.className = controlBar.className + ' controlbar-element-hidden'

    this.html.querySelector('.icon-player-play').onclick = () => {     
      this.playManyVideoAd()
      this.html.querySelector('.autoplay-many-video-ad').style.display = 'none'
    }
  }

  created (player) {
   //添加video
   let videos = this.adVideoSource.map((url,index) => {
    return `<video id="many-video-ad-content${index+1}" style="${index === 0?'display: block':'display:none'};width:100%;height:100%" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="${url.adVideo}"></video>`
    })
    this.html.querySelector('.videosmb').innerHTML = videos.join(' ')

    this.indexVideo = Number(this.indexVideo)
    let indexVideo_ = this.indexVideo
    let adVideoSource_ = this.adVideoSource
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+this.indexVideo)
    let videoAdDetak = this.html.querySelector('.many-video-ad-detail')
    let self = this
    function getManyVideoAdTime(){
      manyVideoAd_ele.removeEventListener('canplay', getManyVideoAdTime)
      videoAdDetak.href = adVideoSource_[indexVideo_ - 1].adVideoLink
      self.html.querySelector('#many-video-ad-duration').innerText = Math.ceil(manyVideoAd_ele.duration)
    }
    manyVideoAd_ele.addEventListener('canplay', getManyVideoAdTime)
  } 
  ready (player) {
    this.indexVideo = Number(this.indexVideo)
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+this.indexVideo)
    let self = this
    manyVideoAd_ele.addEventListener('ended', function(event) {
      let flag = self.playNext(self)
      if(flag == '-1'){
        player.play()
        let controlBar = document.querySelector('.prism-controlbar')
        controlBar.className = controlBar.className.replace(' controlbar-element-hidden', '')
      }
      
    })
    this.html.querySelector('.many-video-ad-close label').onclick = () => {
      if (typeof this.adCloseFunction === 'function') {
        this.adCloseFunction(this)
      } else {
        this.closeManyVideoAd()
      }
    }
    
  }
  // 视频广告倒计时
  setAdInterval () {
    let adDuration_ele = this.html.querySelector('#many-video-ad-duration')
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+this.indexVideo)
    this.adInterval = setInterval(() => {
      let duration = Math.ceil(manyVideoAd_ele.duration)
      let currentTime = Math.ceil(manyVideoAd_ele.currentTime)
      let time = duration - currentTime
      adDuration_ele.innerText = time
      if(time == 1 ){
        clearInterval(this.adInterval)
      }
    }, 1000)
  }

  // 关闭视频广告
  closeManyVideoAd () {
    this.clearAdInterval()
    let controlBar = this.html.parentNode.querySelector('.prism-controlbar')
    controlBar.className = controlBar.className.replace(' controlbar-element-hidden', '')
    this.html.parentNode.removeChild(this.html)
    this.html = null
    //广告结束之后自动播放主视频
    document.getElementById('player-con').getElementsByTagName('video')[0].play()
  }

  // 清除视频广告倒计时
  clearAdInterval () {
    this.adInterval !== null && clearInterval(this.adInterval);
    this.adInterval = null
  }

  // 播放视频广告
  playManyVideoAd () {
    this.setAdInterval()
    this.html.querySelector('#many-video-ad-content'+this.indexVideo).play()
  }

  // 暂停视频广告 
  pauseManyVideoAd () {
    this.clearAdInterval()
    this.html.querySelector('#many-video-ad-content'+this.indexVideo).pause()
  }
  

  // 关闭当前广告并播放下一个视频
  playNext(self){
    if(self.indexVideo >= self.adVideoSource.length){
      self.html.parentNode.removeChild(self.html)
      return -1;
    }
    this.indexVideo = Number(this.indexVideo)
    if(document.getElementById('many-video-ad-content'+this.indexVideo) != null){
      document.getElementById('many-video-ad-content'+this.indexVideo).remove()
    }
    
    let indexVideo_ =  this.indexVideo+1
    self.html.querySelector('.many-video-ad-detail').href=self.adVideoSource[self.indexVideo].adVideoLink
    let manyVideoAd_ele = this.html.querySelector('#many-video-ad-content'+indexVideo_)
    let adDuration_ele = this.html.querySelector('#many-video-ad-duration')
    manyVideoAd_ele.style.display = 'block'
    if(this.adVideoSource.length >= this.indexVideo){
      this.indexVideo = this.indexVideo+1
    }

    let duration = Math.ceil(manyVideoAd_ele.duration)
    adDuration_ele.innerText = duration
    self.setAdInterval()
    manyVideoAd_ele.play()
    manyVideoAd_ele.addEventListener('ended', function(event) {
      let flag = self.playNext(self)
      //广告结束之后自动播放主视频
      if(flag == '-1'){
        document.getElementById('player-con').getElementsByTagName('video')[0].play()
        let controlBar = document.querySelector('.prism-controlbar')
        controlBar.className = controlBar.className.replace(' controlbar-element-hidden', '')
      }
    })
  }
}

let defaultComponent = ManyVideoAdComponent

if (device.mobile()) {
  defaultComponent = MbManyVideoAdComponent
}

export default defaultComponent