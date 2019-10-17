import startADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 开始图片广告组件
 */
export default class StartADComponent {
  /**
   * @constructor 开始图片广告组件构造函数
   * @param {String coverUrl 广告图片地址}
   * @param {String adUrl 广告链接}
   * @param {Number adDuration 广告时长, 单位为秒}
   */
  constructor (coverUrl, adUrl, adDuration) {
    this.coverUrl = coverUrl
    this.adUrl = adUrl
    this.adDuration = adDuration
    if (adDuration <= 0) {
      throw Error('adDuration must must be greater than 0')
    }
    this.html = parseDom(startADHtml)
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.ad-name').innerText = this.isEn ? 'Ad' : '广告'
    this.html.querySelector('.second').innerText = this.isEn ? 's' : '秒'

    let adUrlElement = this.html.querySelector('.ad-content')
    adUrlElement.setAttribute('href', this.adUrl)

    let adImgElement = adUrlElement.querySelector('img')
    adImgElement.setAttribute('src', this.coverUrl)

    let durationElement = this.html.querySelector('.tip i')
    durationElement.innerText = this.adDuration

    el.appendChild(this.html)

    if (this.html !== null) {
      if (player.getStatus() !== 'init') {
        player.pause()        
      }
      let duration = this.adDuration
      let durationElement = this.html.querySelector('.tip i')
      let durationInterval = setInterval(() => {
        duration = duration - 1
        durationElement.innerText = duration
        if (duration === 0) {
          clearInterval(durationInterval)
          this.removeComponent()
          // 如果试看组件和记忆播放组件一起用了, 那么不让播放器播放
          let playerOptions = player.getOptions()
          let memoryVideo = playerOptions.vid || playerOptions.source.replace(/\?.*$/, '')
          let memoryTime = localStorage.getItem(memoryVideo) || 0
          if (memoryTime) {
            memoryTime = parseInt(memoryTime)
          }
          let components = player.getOptions() && player.getOptions().components
          let memoryComponent = components.find(item => item.type.name === 'MemoryPlayComponent')
          let memoryAutoPlay = memoryComponent && memoryComponent.args[0]
          if (!memoryAutoPlay || player.getCurrentTime() >= memoryTime) {
            player.play()
          }
        }
      }, 1000)
    }
  }

  removeComponent () {
    this.html.parentNode.removeChild(this.html)
    this.html = null
  }

  ready(player) {
    if (this.html !== null) {
      player.pause()
    }
  }
}