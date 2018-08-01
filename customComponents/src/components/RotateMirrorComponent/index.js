import rotateMirror from './index.html'
import './index.scss'
import { parseDom } from 'utils'

export default class RotateMirrorComponent {
  constructor () {
    this.html = parseDom(rotateMirror)
  }

  createEl (el) {
    let eleControlbar = el.querySelector('.prism-controlbar')
    eleControlbar.appendChild(this.html)
  }

  ready (player, e) {
    this.html.querySelector('.icon-player-rotate-left').onclick = function () {
      let rotate = player.getRotate()
      player.setRotate(rotate - 45)
    }
    this.html.querySelector('.icon-player-rotate-right').onclick = function () {
      let rotate = player.getRotate()
      player.setRotate(rotate + 45)
    }
    let eleMirror = this.html.querySelector('.mirror-option')
    this.html.querySelector('.icon-player-switch').onclick = () => {
      let displayStyle = eleMirror.style.display
      eleMirror.style.display = displayStyle === 'none' ? 'block' : 'none'
    }
    eleMirror.onmouseleave = function() {
      this.style.display = 'none'
    }
    eleMirror.onclick = function (e) {
      let target = e.target
      let param = null
      if (!target.className.match('active')) {
        param = target.getAttribute('data-id')
        target.className = 'mirror-item active'
      } else {
        target.className = 'mirror-item'
      }
      player.setImage(param)
    }
  }
}