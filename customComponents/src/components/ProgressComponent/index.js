import progressHtml from './index.html'
import { parseDom } from 'utils'
import './index.scss'

/**
 * 视频打点组件
 */
export default class ProgressMarker {
  constructor() {
    this.html = parseDom(progressHtml)
    this.imgEle = this.html.querySelector('.img-wrap img')
    this.timeEle = this.html.querySelector('.time')
    this.playBtnEle = this.html.querySelector('.pregress-play-btn')
    this.describeEle = this.html.querySelector('.describe')
    this.timer = null
    this.currentOffset = null
  }

  createEl(el, player) {

    el.appendChild(this.html)

    this.html.onmouseenter = () => {
      if (this.timer !== null) {
        clearTimeout(this.timer)
        this.timer = null
      }
    }

    this.html.onmouseleave = () => {
      this.html.style.display = 'none'
    }
    this.html.onclick = () => {
      this.html.style.display = 'none'      
    }
    this.html.querySelector('.pregress-play-btn').addEventListener('click', () => {
      player.seek(this.currentOffset)
    })
  }

  markerDotOver(player, data) {
    let maxWidth = player._el.clientWidth
    let componentLeft = `calc(${data.left * 100}% - 10px)`
    if (maxWidth * data.left + 323 > maxWidth) {
      componentLeft = (maxWidth - 330) + 'px'
      this.html.querySelector('.icon-arrowdown').style.left = maxWidth*data.left - maxWidth + 317 + 'px'
    } else {
      this.html.querySelector('.icon-arrowdown').style.left = '-2px'
    }
    let { coverUrl, title, describe, offset} = data.progressMarker
    this.currentOffset = offset
    this.html.style.left = componentLeft
    this.imgEle.src = coverUrl
    this.timeEle.innerText = title
    this.describeEle.innerText = describe
    this.html.style.display = 'block'
  }
  
  markerDotOut(player, data) {
    this.timer = setTimeout(() => {
      this.html.style.display = 'none'
    }, 100)
  }
}