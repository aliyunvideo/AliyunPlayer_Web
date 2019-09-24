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
  constructor (autoPlay = false,getTime,saveTimeFunction) {
    this.html = parseDom(memoryPlayHtml)
    this.autoPlay = autoPlay
    this.getTime = getTime || this._getTime;
    this.saveTimeFunction = saveTimeFunction || this._saveTime;
    this.hasMemoryDisplay = false
  }

  createEl (el) {
    el.appendChild(this.html)
  }

  ready (player, e) {
    let playerOptions = player.getOptions()
    let memoryVideo = playerOptions.vid || playerOptions.source.replace(/\?.*$/, '')     // 根据视频 vid 或者 source 去存储 localeStorage
    let memoryTime = this.getTime(memoryVideo);
    memoryTime = memoryTime ? parseInt(memoryTime) : 0;
    if (memoryTime !== null && memoryTime !== 0 && !this.hasMemoryDisplay) {
      // 标识记忆播放是否有触发, 解决清晰度切换也会触发记忆播放的问题
      this.hasMemoryDisplay = true
      if (this.autoPlay) {
        player.seek(memoryTime)
        if (player.getStatus() !== 'playing') {
          player.play()
        }
      } else {
        let memoryVideoTime = this.getVideoTime(memoryTime)
        //判断是否是视频播放完了，如果没到，就有拼接的跳转播放
        if(memoryTime !== parseInt(player._duration)){
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
      }
    }
    
    document.onvisibilitychange = function () {
      if (document.visibilityState === 'hidden' && player.getCurrentTime() !== 0) {
        this.saveTimeFunction(memoryVideo, player.getCurrentTime());
        console.log(play)
      }
    }
    window.onbeforeunload = function () {
      if (player.getCurrentTime() !== 0) {
        this.saveTimeFunction(memoryVideo, player.getCurrentTime());     
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
    let playerOptions = player.getOptions();
    let memoryVideo = playerOptions.vid || playerOptions.source.replace(/\?.*$/, '');
    this.saveTimeFunction(memoryVideo, player.getCurrentTime());
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

  _getTime(memoryVideo){
    return localStorage.getItem(memoryVideo);
  }

  _saveTime(memoryVideo,currentTime){
    localStorage.setItem(memoryVideo, currentTime);
  }
}
