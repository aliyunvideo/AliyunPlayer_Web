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
      if (!target.className.match('active')) {
        let siblingEle = target.previousElementSibling || target.nextElementSibling
        if (siblingEle.className.match('active')) {
          siblingEle.className = 'mirror-item'
          player.cancelImage()
        }
        let param = target.getAttribute('data-id')
        player.setImage(param)
        target.className = 'mirror-item active'
      } else {
        player.cancelImage()
        target.className = 'mirror-item'
      }
    }
  }
}