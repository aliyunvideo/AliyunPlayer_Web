import previewHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

export default class PreviewComponent {
  constructor(previewDuration, customDomString = null) {
    this.previewDuration = previewDuration
    this.html = parseDom(previewHtml)
    if (customDomString !== null) {
      this.html.querySelector('.preview-custom').innerHTML = customDomString
    }
    this.html.querySelector('.preview-time').innerText = previewDuration
  }

  createEl (el) {
    let videoSiblingElement = el.querySelector('video').nextElementSibling
    if (videoSiblingElement) {
      el.insertBefore(this.html, videoSiblingElement)      
    } else {
      el.appendChild(this.html)
    }
  }

  play (player) {
    let currentTime = player.getCurrentTime()
    if ((Math.floor(currentTime) >= this.previewDuration * 60)) {
      player.pause()
    }
  }

  timeupdate (player, e) {
    let currentTime = player.getCurrentTime()
    if (Math.floor(currentTime) >= this.previewDuration * 60) {
      player.pause()
      this.html.querySelector('.preview-component-layer').style.display = 'block'
      let controlbarElement = this.html.parentNode.querySelector('.prism-controlbar')
      controlbarElement.className = controlbarElement.className + ' controlbar-element-hidden'
    }
  }
}