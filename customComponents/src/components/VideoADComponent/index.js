import videoADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

export default class VideoAdComponent {
  /** 
   * @constructor 视频广告的构造函数
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

  createEl (el) {
    // 给广告视频添加 source
    let videoAd_ele = this.html.querySelector('#video-ad-content')
    videoAd_ele.setAttribute('src', this.adVideoSource)

    // 获取广告视频的时长, 并赋值到 this.duration 中
    let self = this
    function getVideoAdTime () {
      videoAd_ele.removeEventListener('canplay', getVideoAdTime)
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
    player.pause()
    this.player = player
    this.html.querySelector('.video-ad-close label').onclick = () => {
      if (typeof this.adCloseFunction === 'function') {
        this.adCloseFunction(this)
      } else {
        this.closeVideoAd()
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
      } else {
        adDuration_ele.innerText = this.adDuration
      }
    }, 1000)
  }

  // 关闭视频广告
  closeVideoAd () {
    this.clearAdInterval()
    this.html.parentNode.removeChild(this.html)
    if (this.player.getOptions().autoplay) {
      this.player.play()
    }
  }
}