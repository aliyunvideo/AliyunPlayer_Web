import trackHtml from './index.html'
import trackModal from './track-modal.html'

import './index.scss'
import { parseDom } from 'utils'

/**
 * 音轨组件
 */
export default class TrackComponent {
  /**
   * @constructor 音轨组件构造函数
   */

  constructor () {
    this.trackList = null;
    this.html = parseDom(trackHtml)
    this.modalHtml = parseDom(trackModal)
    this.hasCreated = false
    this.definition = ''
  }

  createEl (el,player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.modalHtml.querySelector('.switchimg').innerText = this.isEn ? 'Track to you for' : '音轨切换到'
    this.modalHtml.querySelector('.switchimg').style.display = 'none'
    let eleControlbar = el.querySelector('.prism-controlbar')
    eleControlbar.appendChild(this.html)
    el.appendChild(this.modalHtml)
    player.on('audioTrackReady', ({paramData}) => {
      this.trackList = paramData
      let lis_ele = paramData.map(v => {
        return `<li data-def="${v.value}">${v.text}</li>`
      })
      this.html.querySelector('.track-list').innerHTML = `<li style="background:rgba(88,87,86,.5);color:#fff">音轨</li>`+lis_ele.join('')
    })
    let currentTrackEle = this.html.querySelector('.current-track')
    let trackListEle = this.html.querySelector('.track-list')

    if (this.hasCreated == false && this.definition) {
      let li_target = trackListEle.querySelector(`li[data-def="${this.definition}"]`)
      li_target.className = 'current'
    }

    this.hasCreated = true

    let timeId = null
    currentTrackEle.onclick = () => {
      trackListEle.style.display = 'block'
    }
    
    currentTrackEle.onmouseleave = () =>{
      timeId = setTimeout(() => {
        trackListEle.style.display = 'none'
      }, 100);
    }

    trackListEle.onmouseenter = () => {
      clearTimeout(timeId)
    }
    trackListEle.onmouseleave = () => {
      trackListEle.style.display = 'none'
      this.modalHtml.style.display = 'none'
    }

    trackListEle.onclick = ({target}) => {
      let definition = target.dataset.def
      if (definition) {
        if (target.className !== 'current') {
          let track = this.trackList.find(v => v.value.toString() === definition)
          player._audioTrackService.switch(track.value)
          this.setCurrentTrack(track.text, track.value)
          this.modalHtml.style.display = 'block'
          this.modalHtml.querySelector('.switchimg').style.display = 'block'
          this.modalHtml.querySelector('span.current-track-tag').innerText = track.text
        } 
      }
    }
  }

  setCurrentTrack(track, def) {
    let currentTrack = this.html.querySelector('.current-track')
    currentTrack.innerText = track
    currentTrack.dataset.def = def
    this.definition = def

    let trackListEle = this.html.querySelector('.track-list')
    let currentEle = trackListEle.querySelector('.current')
    if (currentEle) {
      currentEle.className = ''
    }
    // let li_target = trackListEle.querySelector(`li[data-def="${def}"]`)
    let lis = trackListEle.querySelectorAll('li')
    lis.forEach(element => {
      let text = element.innerText
      if(text === track){
        element.className = 'current'
      }
      console.log(text)
    });
    if (lis) {
      lis.className = 'current'
    }
  }

  created(player) {

  }

  ready(player) {
    this.modalHtml.style.display = 'none'
    // 隐藏设置里面的音轨
    let settingEle = document.querySelector('.prism-setting-item.prism-setting-audio')
    if (settingEle) {
     settingEle.classList.add('player-hidden')
    }
  }
}