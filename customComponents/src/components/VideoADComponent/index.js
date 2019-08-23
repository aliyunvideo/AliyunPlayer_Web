import videoADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

import mbVideoADHtml from './mbIndex.html'
import device from 'current-device'

/*
 * PC 视频广告组件
 */
class VideoAdComponent {
  /** 
   * @constructor PC 视频广告的构造函数
   * @param adVideoSource {@String 广告视频的视频地址 必须参数}
   * @param adLink {@String 广告视频的链接地址 必须参数}
   * @param adCloseFunction {@Function 关闭广告的点击事件处理函数, 可选参数, 不传则默认关闭广告视频}
   * @param closeText {@String 关闭广告的文字内容, 可选参数, 不传则默认为 '关闭广告'}
   */
  constructor (adVideoSource, adLink, adCloseFunction, closeText = '关闭广告') {
    this.adVideoSource = adVideoSource
    this.adLink = adLink
    this.html = parseDom(videoADHtml)
    this.adInterval = null
    this.adCloseFunction = adCloseFunction
    this.html.querySelector('.video-ad-close-text').innerText = closeText

    this.adDuration = null    // 视频广告的时长, 用于倒计时, 
    this.player = null
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情'
    this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制'
    this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击'
    // 给广告视频添加 source
    let videoAd_ele = this.html.querySelector('#video-ad-content')
    videoAd_ele.setAttribute('src', this.adVideoSource)

    // 获取广告视频的时长, 并赋值到 this.duration 中
    let self = this
    function getVideoAdTime () {
      videoAd_ele.removeEventListener('canplay', getVideoAdTime)
      //广告起播loading 
      document.getElementById('loadflag').style.display = 'none'
      self.adDuration = Math.ceil(videoAd_ele.duration)
      let adDuration_ele = self.html.querySelector('#video-ad-duration')
      adDuration_ele.innerText = self.adDuration
      videoAd_ele.play().then(() => {
        self.setAdInterval()
      })
      .catch(err => {
        self.html.querySelector('.autoplay-video-ad').style.display = 'block'
      })
    }

    this.html.querySelector('.icon-player-play').onclick = () => {     
      this.playVideoAd()
      this.html.querySelector('.autoplay-video-ad').style.display = 'none'
    }
    
    videoAd_ele.addEventListener('canplay', getVideoAdTime)

    // 查看详情 整个广告链接添加 href
    let videoLink = this.html.querySelector('.video-ad-link')
    let videoDetail = this.html.querySelector('.video-ad-detail')
    videoLink.setAttribute('href', this.adLink)
    videoDetail.setAttribute('href', this.adLink)

    el.appendChild(this.html) 
  }

  ready (player, e) {
    if (this.html !== null) {
      player.pause()
      this.player = player
      this.html.querySelector('.video-ad-close label').onclick = () => {
        if (typeof this.adCloseFunction === 'function') {
          this.adCloseFunction(this)
        } else {
          this.closeVideoAd()
        }
        //广告播放完了之后自动播放视频
        document.getElementById('player-con').getElementsByTagName('video')[0].play()
      }
    }
  }

  // 暂停视频广告 
  pauseVideoAd () {
    this.clearAdInterval()
    this.html.querySelector('#video-ad-content').pause()
  }

  // 播放视频广告
  playVideoAd () {
    this.setAdInterval()
    this.html.querySelector('#video-ad-content').play()
  }

  // 清除视频广告倒计时
  clearAdInterval () {
    this.adInterval !== null && clearInterval(this.adInterval);
    this.adInterval = null
  }

  // 视频广告倒计时
  setAdInterval () {
    let adDuration_ele = this.html.querySelector('#video-ad-duration')
    this.adInterval = setInterval(() => {
      this.adDuration -= 1
      if (this.adDuration <= 0) {
        this.closeVideoAd()
        //广告播放完了之后自动播放视频
        document.getElementById('player-con').getElementsByTagName('video')[0].play()
      } else {
        adDuration_ele.innerText = this.adDuration
      }
    }, 1000)
  }

  // 关闭视频广告
  closeVideoAd () {
    this.clearAdInterval()
    this.html.parentNode.removeChild(this.html)
    this.html = null
    if (this.player.getOptions().autoplay) {
      this.player.play()
    }
  }
}


/**
 * 移动端视频广告组件
 */
class MbVideoAdComponent {
  /**
   * @constructor 移动端视频广告组件
   * @param {String adVideoSource 视频广告播放地址}
   * @param {String adLink 广告链接}
   * @param {Function adCloseFunction 关闭广告按钮点击出发的函数}
   * @param {String closeText 可选参数 关闭按钮中的文字, 默认为 '关闭广告'}
   */
  constructor (adVideoSource, adLink, adCloseFunction, closeText = '关闭广告') {
    this.adVideoSource = adVideoSource
    this.adLink = adLink
    this.html = parseDom(mbVideoADHtml)
    this.adInterval = null
    this.adCloseFunction = adCloseFunction
    this.html.querySelector('.video-ad-close-text').innerText = closeText
    this.html.querySelector('.video-ad-link').setAttribute('href', this.adLink)
    this.html.querySelector('.video-ad-detail').setAttribute('href', this.adLink)
    this.adDuration = null    // 视频广告的时长, 用于倒计时, 

  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情'
    this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制'
    this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击'
    el.appendChild(this.html)
    el.querySelector('video')
    el.querySelector('video').setAttribute('preload', 'load')

    // 隐藏 controlbar 
    let controlBar = el.querySelector('.prism-controlbar')
    controlBar.className = controlBar.className + ' controlbar-element-hidden'
    // 隐藏播放暂停按钮
    let pauseBtn = el.querySelector('.prism-big-play-btn')
    pauseBtn.className = pauseBtn.className + ' controlbar-element-hidden'  
  }

  created (player) {
    this.player = player

    this.vdSource = player.getOptions().source
    player.loadByUrl(this.adVideoSource)

    let btnPlay_el = this.html.querySelector('.autoplay-video-ad')
    btnPlay_el.onclick = () => {
      //alert('created')
      if (this.adDuration === null) {
        return
      }
      player.loadByUrl(this.adVideoSource)
      this.html.parentNode.querySelector('.prism-big-play-btn').click()
    }

    if (this.adDuration === null) {
      //player.loadByUrl(this.adVideoSource)
      this.adDuration = undefined

      let aliplayerWrap_el = this.html.parentNode
      let aliplayer_el = aliplayerWrap_el.querySelector('video')
      let self = this
      function timeupdateHandle () {
        let duration = aliplayer_el.duration       
        console.log('duration', duration)
        if (!isNaN(duration) && duration !== 0) {
          aliplayer_el.removeEventListener('timeupdate', timeupdateHandle)
          self.adDuration = Math.ceil(aliplayer_el.duration)
          if (self.html.querySelector('.autoplay-video-ad').style.display !== 'none') {
            self.html.querySelector('.autoplay-video-ad').style.display = 'none'
            player.play()
          }
          self.html.querySelector('#video-ad-duration').innerText = self.adDuration
          self.setAdInterval()
          // document.getElementById('loadflag').style.display = 'none'
        }
      }

      aliplayer_el.addEventListener('timeupdate', timeupdateHandle)
    }
  }

  ready (player) {
    //alert("2222222")
    // let btnPlay_el = this.html.querySelector('.autoplay-video-ad')
    // btnPlay_el.onclick = () => {
    //   alert('ready')
    //   if (this.adDuration === null) {
    //     return
    //   }
    //   this.html.parentNode.querySelector('.prism-big-play-btn').click()
    // }

    // if (this.adDuration === null) {
    //   player.loadByUrl(this.adVideoSource)
    //   this.adDuration = undefined

    //   let aliplayerWrap_el = this.html.parentNode
    //   let aliplayer_el = aliplayerWrap_el.querySelector('video')
    //   let self = this
    //   function timeupdateHandle () {
    //     let duration = aliplayer_el.duration
    //     console.log('duration', duration)
    //     if (!isNaN(duration) && duration !== 0) {
    //       aliplayer_el.removeEventListener('timeupdate', timeupdateHandle)
    //       self.adDuration = Math.ceil(aliplayer_el.duration)
    //       if (self.html.querySelector('.autoplay-video-ad').style.display !== 'none') {
    //         self.html.querySelector('.autoplay-video-ad').style.display = 'none'
    //         player.play()
    //       }
    //       self.html.querySelector('#video-ad-duration').innerText = self.adDuration
    //       self.setAdInterval()
    //     }
    //   }

    //   aliplayer_el.addEventListener('timeupdate', timeupdateHandle)

      // 关闭广告点击事件
      this.html.querySelector('.video-ad-close label').onclick = () => {
        if (typeof this.adCloseFunction === 'function') {
          this.adCloseFunction(this)
        } else {
          this.closeVideoAd()
        }
        //广告播放完了之后自动播放视频
        document.getElementById('player-con').getElementsByTagName('video')[0].play()
      }
    // }
  }

  // 视频广告倒计时
  setAdInterval () {
    let adDuration_ele = this.html.querySelector('#video-ad-duration')
    this.adInterval = setInterval(() => {
      this.adDuration -= 1
      if (this.adDuration <= 0) {
        this.closeVideoAd()
        //广告播放完了之后自动播放视频
        document.getElementById('player-con').getElementsByTagName('video')[0].play()
      } else {
        adDuration_ele.innerText = this.adDuration
      }
    }, 1000)
  }

  // 关闭视频广告
  closeVideoAd () {
    this.clearAdInterval()
    this.player.loadByUrl(this.vdSource)
    let controlBar = this.html.parentNode.querySelector('.prism-controlbar')
    controlBar.className = controlBar.className.replace(' controlbar-element-hidden', '')
    let pauseBtn = this.html.parentNode.querySelector('.prism-big-play-btn')
    pauseBtn.className = pauseBtn.className.replace(' controlbar-element-hidden', '')
    if (this.player.getOptions().autoplay) {
      this.player.play()
    }
    this.html.parentNode.removeChild(this.html)
  }

  // 清除视频广告倒计时
  clearAdInterval () {
    this.adInterval !== null && clearInterval(this.adInterval);
    this.adInterval = null
  }

  // 播放视频广告
  playVideoAd () {
    this.setAdInterval()
    this.player.play()
  }

  // 暂停视频广告 
  pauseVideoAd () {
    this.clearAdInterval()
    this.player.pause()
  }
}

let defaultComponent = VideoAdComponent

if (device.mobile()) {
  defaultComponent = MbVideoAdComponent
}

export default defaultComponent