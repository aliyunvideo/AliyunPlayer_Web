import playlistControl from './index.html'
import listContent from './list.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 播放列表事件
 */
const PlaylistComponentEvent = {
  VideoClick: 'plugin-playlist-click-video',
  PrevClick: 'plugin-playlist-click-prev',
  NextClick: 'plugin-playlist-click-next',
  VideoChange: 'plugin-playlist-change',
}

/**
 * 播放列表组件
 */
export default class PlaylistComponent {
  /**
   * @constructor 播放列表组件构造函数
   * @param {Array playlist 播放列表数组}
   */
  constructor (playlist) {
    this.controlHtml = parseDom(playlistControl)
    this.listHtml = parseDom(listContent)
    this.playlist = playlist
    this.playingVideoIndex = 0
    this.listHideTimeout = null
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.controlHtml.querySelector('.player-tooltip.prev').innerText = this.isEn ? 'Previous' : '上一个'
    this.controlHtml.querySelector('.player-tooltip.list').innerText = this.isEn ? 'Playlist' : '播放列表'
    this.controlHtml.querySelector('.player-tooltip.next').innerText = this.isEn ? 'Next' : '下一个'

    let controlbarElement = el.querySelector('.prism-controlbar')
    let siblingElement = controlbarElement.querySelector('.prism-time-display')
    controlbarElement.insertBefore(this.controlHtml, siblingElement)

    this.listHtml.onmouseleave = () => {
      this.listHtml.style.width = 0
    }

    this.listHtml.onmouseenter = this.clearHideListTimeout.bind(this)

    this.controlHtml.querySelector('.icon-list').onclick = this.tooglePlaylist.bind(this)

    this.listHtml.querySelector('.list').innerHTML = this.computedListDom(this.playlist)

    let source = player.getOptions() && player.getOptions().source
    let defaultPlayIndex = 0
    if (source) {
      defaultPlayIndex = this.playlist.findIndex(item => item.source === source)
      defaultPlayIndex = defaultPlayIndex > -1 ? defaultPlayIndex : 0
      this.playingVideoIndex = defaultPlayIndex > -1 ? defaultPlayIndex : 0
    }

    this.listHtml.querySelector('.list').childNodes[0].className = 'video-item active'
    el.appendChild(this.listHtml)
  }

  ready (player, e) {
    this.controlHtml.querySelector('.icon-skip-previous').onclick = () => {

      player && player.trigger(PlaylistComponentEvent.PrevClick, { 
        currentIndex: Math.max(this.playingVideoIndex - 1, 0)
      })

      if (this.playingVideoIndex === 0) {
        this.playlistTip(this.isEn ? 'Already the first one~' : '已经是第一个了~', player._el)
        return
      }
      this.playVideo(player, this.playingVideoIndex - 1)
    }

    this.controlHtml.querySelector('.icon-skipnext').onclick = () => {

      player && player.trigger(PlaylistComponentEvent.NextClick, { 
        currentIndex: Math.min(this.playingVideoIndex + 1, this.playlist.length - 1)
      })

      if (this.playingVideoIndex === this.playlist.length - 1) {
        this.playlistTip(this.isEn ? 'Already the last one~' : '已经是最后一个了~', player._el)
        return
      }
      this.playVideo(player, this.playingVideoIndex + 1)
    }

    this.listHtml.querySelector('.list').onclick = (e) => {
      let target = e.target
      let videoIndex = parseInt(target.getAttribute('data-index'))

      player && player.trigger(PlaylistComponentEvent.VideoClick, { 
        currentIndex: this.playingVideoIndex,
        clickedIndex: videoIndex
      })

      if (target.className === 'video-item') {
        this.playVideo(player, videoIndex)
      }
    }
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

    player && player.trigger(PlaylistComponentEvent.VideoChange, { currentIndex: videoIndex })
    
    this.playingVideoIndex = parseInt(videoIndex)
    player.loadByUrl(this.playlist[videoIndex].source)
    this.listHtml.querySelector('.video-item.active').className = 'video-item'
    this.listHtml.querySelector('.list').childNodes[videoIndex].className = 'video-item active'
  }

  /* 点击 controlbar 上的播放列表按钮显示隐藏播放列表 */
  tooglePlaylist () {
    this.clearHideListTimeout()
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