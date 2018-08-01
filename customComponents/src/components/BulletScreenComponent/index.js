import bulletHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

export default class BulletScreenComponent {
  constructor (text, style) {
    this.text = text
    this.style = style || { fontSize: '14px', color: '#fff' }
    this.html = parseDom(bulletHtml)
  }

  createEl (el) {
    this.html.innerText = this.text
    el.appendChild(this.html)
  }

  ready (player, e) {
    Object.assign(this.html.style, this.style)
    let bulletHeight = this.html.offsetHeight
    let playerHeight = parseInt(player.getOptions().height.replace('px', ''))
    let maxHeight = playerHeight - bulletHeight
    let top = this.randomTop(maxHeight)
    this.html.style.top = top
    this.html.addEventListener('animationiteration', () => {
      this.html.style.top = this.randomTop(maxHeight)
    })
  }

  play (player, e) {
    this.html.style.animationPlayState = 'running'
  }

  pause (player, e) {
    this.html.style.animationPlayState = 'paused'
  }

  randomTop (max) {
    return Math.floor(Math.random() * max) + 'px'
  }
}