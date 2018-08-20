import startADHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

export default class StartADComponent {

  //
  constructor (coverUrl, adUrl, adDuration) {
    this.coverUrl = coverUrl
    this.adUrl = adUrl
    this.adDuration = adDuration
    this.html = parseDom(startADHtml)
  }

  createEl (el) {
    let adUrlElement = this.html.querySelector('.ad-content')
    adUrlElement.setAttribute('href', this.adUrl)

    let adImgElement = adUrlElement.querySelector('img')
    adImgElement.setAttribute('src', this.coverUrl)

    let durationElement = this.html.querySelector('.tip i')
    durationElement.innerText = this.adDuration

    el.appendChild(this.html)
  }

  removeComponent () {
    this.html.parentNode.removeChild(this.html)
  }

  ready (player, e) {
    console.log('ready')
    player.pause()
    let duration = this.adDuration
    let durationElement = this.html.querySelector('.tip i')
    let durationInterval = setInterval(() => {
      duration = duration - 1
      durationElement.innerText = duration
      if (duration === 0) {
        clearInterval(durationInterval)
        this.removeComponent()
        player.play()
      }
    }, 1000)
  }
}