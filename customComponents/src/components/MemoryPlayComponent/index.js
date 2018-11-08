import memoryPlayHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 记忆播放组件
 */
export default class MemoryPlayComponent {
  /**
   * @constructor 记忆播放组件构造函数
   */
  constructor () {
    this.html = parseDom(memoryPlayHtml)
  }

  createEl (el) {
    el.appendChild(this.html)
  }

  ready (player, e) {
    let playerOptions = player.getOptions()
    let memoryVideo = playerOptions.source.replace(/\?.*$/, '') || playerOptions.vid     // 根据视频 source 或者 vid 去存储 localeStorage
    let memoryTime = localStorage.getItem(memoryVideo)
    memoryTime = memoryTime && parseInt(memoryTime)
    if (memoryTime !== null && memoryTime !== 0) {
      let memoryVideoTime = this.getVideoTime(memoryTime)
      let memoryDomString = `<div class="memory-play">
        <i class="iconfont icon-close"></i>
        <span>上次看到</span>
        <span>${memoryVideoTime}</span>
        <span class="play-jump">跳转播放</span>
      </div>`
      this.html.innerHTML = memoryDomString
      let timeoutMemory = setTimeout(() => {
        this.html.innerHTML = ''
      }, 15000)
      this.html.querySelector('.icon-close').onclick = () => {
        this.html.innerHTML = ''
        clearTimeout(timeoutMemory)
      }
      this.html.querySelector('.play-jump').onclick = () => {
        player.seek(memoryTime)
        if (player.getStatus() !== 'playing') {
          player.play()
        } 
        this.html.innerHTML = ''
        clearTimeout(timeoutMemory)
      }
    }
    window.onbeforeunload = function () {
      if (player.getCurrentTime() !== 0) {
        localStorage.setItem(memoryVideo, player.getCurrentTime())      
      }
    }
  }

  error (player, e) {
    this.setMemory(player)
  }

  dispose (player, e) {
    this.setMemory(player)
  }

  setMemory (player) {
    let playerOptions = player.getOptions()
    let memoryVideo = playerOptions.source || playerOptions.vid
    if (player.getCurrentTime() !== 0) {
      localStorage.setItem(memoryVideo, player.getCurrentTime())      
    }
  }

  getVideoTime(duration) {
    let secondTotal = Math.round(duration);

    let hour = Math.floor(secondTotal / 3600);
    let minute = Math.floor((secondTotal - hour * 3600) / 60);

    let second = secondTotal - hour * 3600 - minute * 60;

    if (minute < 10) {
        minute = '0' + minute; 
    }
    if (second < 10) {
        second = '0' + second;
    }
    return hour === 0 ? minute + ':' + second : hour + ':' + minute + ':' + second;
  }
}
