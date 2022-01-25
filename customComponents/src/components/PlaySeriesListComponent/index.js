import playlistControl from './index.html'
import listContent from './list.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 播放列表组件
 */
export default class PlaySeriesListComponent {
  /**
   * @constructor 播放选集组件构造函数
   * @param {el id}
   */
  constructor (el, chooseSeriesHandle) {
    this.controlHtml = parseDom(playlistControl)
    this.listHtml = parseDom(listContent)
    this.listHtml.appendChild(document.getElementById(el))
    this.playingVideoIndex = 0
    this.listHideTimeout = null
    this.chooseSeriesHandle = chooseSeriesHandle
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.controlHtml.querySelector('.player-tooltip.list').innerText = this.isEn ? 'Playlist' : '选集'
    let controlbarElement = el.querySelector('.prism-controlbar')
    controlbarElement.appendChild(this.controlHtml)
    this.listHtml.onmouseleave = () => {
      this.listHtml.style.width = 0
    }

    this.listHtml.onmouseenter = this.clearHideListTimeout.bind(this)

    this.controlHtml.querySelector('.series-list-txt').onclick = this.tooglePlaylist.bind(this)
    el.appendChild(this.listHtml)
  }

  /* clear 自动隐藏右侧播放列表 timeout 的函数 */
  clearHideListTimeout () {
    if (this.listHideTimeout !== null) {
      clearTimeout(this.listHideTimeout)
      this.listHideTimeout = null
    }
  }

  /* 播放 playlist 中 index 为 @param videoIndex 的视频 */
  playVideo (player, videoIndex) {
    if (this.playingVideoIndex === videoIndex) {
      return 
    }
    this.playingVideoIndex = parseInt(videoIndex)
    this.listHtml.querySelector('.video-item.active').className = 'video-item'
  }

  /* 点击 controlbar 上的播放列表按钮显示隐藏播放列表 */
  tooglePlaylist () {
    this.clearHideListTimeout()
    this.chooseSeriesHandle()
    if (this.listHtml.style.width === '30%') {
      this.listHtml.style.width = 0
    } else {
      this.listHtml.style.width = '30%'
      this.listHideTimeout = setTimeout(() => {
        this.listHtml.style.width = 0
      }, 5000)
    }
  }

  /* 播放器提示信息 */
  playlistTip (msg ,el) {
    let tipElement = document.createElement('div')
    tipElement.className = 'playlist-skip-tip'
    tipElement.innerText = msg
    el.appendChild(tipElement)
    setTimeout(function () {
      el.removeChild(tipElement)
    }, 3000)
  }

  computedListDom (playlist) {
    let domList = playlist.map((item, index) => {
      return `<div class="video-item" data-index="${index}" title="${item.name}">${item.name}</div>`
    })
    return domList.join('')
  }
}