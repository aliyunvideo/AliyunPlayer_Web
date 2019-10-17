import rotateMirror from './index.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 旋转镜像组件 
 */
export default class RotateMirrorComponent {
  /**
   * @constructor 旋转镜像组件构造函数
   */
  constructor () {
    this.html = parseDom(rotateMirror)
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.player-tooltip.counterclockwise').innerText = this.isEn ? 'Rotate 45 degrees counterclockwise' : '逆时针旋转45度'
    this.html.querySelector('.mirror-item[data-id="counterclockwise"]').innerText = this.isEn ? 'Rotate left 45 ̊' : '左旋转45˚'
    this.html.querySelector('.player-tooltip.clockwise').innerText = this.isEn ? 'Rotate 45 degrees clockwise' : '顺时针旋转45度'
    this.html.querySelector('.mirror-item[data-id="clockwise"]').innerText = this.isEn ? 'Rotate right 45 ̊' : '右旋转45˚'    
    this.html.querySelector('.player-tooltip.switch').innerText = this.isEn ? 'Mirror' : '镜像'
    this.html.querySelector('.mirror-item[data-id=vertical]').innerText = this.isEn ? 'Vertical mirroring' : '垂直镜像'
    this.html.querySelector('.mirror-item[data-id=horizon]').innerText = this.isEn ? 'Horizontal mirroring' : '水平镜像'

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
      if (target.dataset.id === 'counterclockwise') {
        let rotate = player.getRotate()
        player.setRotate(rotate - 45)
        return
      }
      if (target.dataset.id === 'clockwise') {
        let rotate = player.getRotate()
        player.setRotate(rotate + 45)
        return
      }
      if (!target.className.match('active')) {
        let siblingEle = target.dataset.id === 'horizon' ? target.previousElementSibling : target.nextElementSibling
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