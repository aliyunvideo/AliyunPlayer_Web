import pauseADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'


/**
 * 暂停图片广告组件
 */
export default class PauseADComponent {
  /**
   * @constructor 暂停图片广告组件构造函数
   * @param {String coverUrl 封面图片地址}
   * @param {String adUrl 广告地址}
   */
  constructor (coverUrl, adUrl) {
    this.coverUrl = coverUrl
    this.adUrl = adUrl
    this.html = parseDom(pauseADHtml)
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.ad-text').innerText = this.isEn ? 'Ad' : '广告'

    let adContent = this.html.querySelector('.ad-content')
    let adImg = adContent.querySelector('img')
    adContent.setAttribute('href', this.adUrl)
    adImg.setAttribute('src', this.coverUrl)

    let btnClose = this.html.querySelector('.btn-close')
    btnClose.onclick = () => {
      this.html.style.display = 'none'
    }

    el.appendChild(this.html)
  }

  play (player, e) {
    this.html.style.display = 'none'
  }

  pause (player, e) {
    this.html.style.display = 'block'
  }
}