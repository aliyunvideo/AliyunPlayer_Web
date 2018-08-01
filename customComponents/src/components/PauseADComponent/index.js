import pauseADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

export default class PauseADComponent {
  constructor (coverUrl, adUrl) {
    this.coverUrl = coverUrl
    this.adUrl = adUrl
    this.html = parseDom(pauseADHtml)
  }

  createEl (el) {
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