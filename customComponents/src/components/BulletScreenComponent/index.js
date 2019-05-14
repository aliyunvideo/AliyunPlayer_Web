import bulletHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 跑马灯组件
 */
export default class BulletScreenComponent {
  /**
   * @constructor 跑马灯构造函数
   * @param {String text 跑马灯内容}
   * @param {Object style 跑马灯样式}
   * param {String bulletPosition 跑马灯所在的位置, 可能的值 'top', 'bottom' , 'random, 默认为 'random'}
   */
  constructor (text, style, bulletPosition = 'random') {
    this.text = text
    this.style = style || { fontSize: '14px', color: '#fff' }
    this.html = parseDom(bulletHtml)
    // this.html.style.animationPlayState = 'paused'
    this.bulletPosition = bulletPosition
  }

  createEl (el) {
    this.html.innerText = this.text
    el.appendChild(this.html)
  }

  ready (player, e) {
    console.log(player.getOptions())
    if (player.getOptions().autoplay === false) {
      this.html.style.animationPlayState = 'paused'
    }
    Object.keys((this.style)).forEach(key => this.html.style[key] = this.style[key])
    let bulletHeight = this.html.offsetHeight
    let playerHeight = parseInt(player.getOptions().height.replace('px', ''))
    let maxHeight = playerHeight - bulletHeight
    let top = this.bulletPosition === 'top' ? 0 : this.bulletPosition === 'bottom' ? (maxHeight + 'px') : this.randomTop(maxHeight)
    this.html.style.top = top
    if (this.bulletPosition === 'random') {
      this.html.addEventListener('animationiteration', () => {
        this.html.style.top = this.randomTop(maxHeight)
      })
    }
  }

  playing (player, e) {
    console.log('playering')
    this.html.style.animationPlayState = 'running'
  }

  timeupdate (player, timeStamp) {
    let el = player.el()
    let componentEl = el.querySelector('.bullet-screen')
    if (!componentEl) {
      el.appendChild(this.html)
    } else {
      if (componentEl.className !== 'bullet-screen') {
        componentEl.className = 'bullet-screen'
      }
      let cssStyles = getComputedStyle(componentEl)
      let display = cssStyles.getPropertyValue('display')
      let opacity = cssStyles.getPropertyValue('opacity')
      let visibility = cssStyles.getPropertyValue('visibility')
      if (display === 'none') {
        componentEl.style.setProperty('display', 'block')
      }
      if (opacity !== '1') {
        componentEl.style.setProperty('opacity', '1')
      }
      if (visibility === 'hidden') {
        componentEl.style.setProperty('visibility', 'visible')
      }
    }
  }

  pause (player, e) {
    console.log('pause')
    this.html.style.animationPlayState = 'paused'
  }

  randomTop (max) {
    return Math.floor(Math.random() * max) + 'px'
  }
}