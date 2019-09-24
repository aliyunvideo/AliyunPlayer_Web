import captionHtml from './index.html'
import captionModal from './caption-modal.html'

import './index.scss'
import { parseDom } from 'utils'

/**
 * 字幕组件
 */
export default class CaptionComponent {
  /**
   * @constructor 字幕组件构造函数
   */

  constructor () {
    this.captionList = null;
    this.html = parseDom(captionHtml)
    this.modalHtml = parseDom(captionModal)
    this.hasCreated = false
    this.definition = ''
  }

  createEl (el,player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    //this.html.querySelector('.current-caption').innerText = this.isEn ? 'Subtitle language' : '字幕语言'
    this.modalHtml.querySelector('.switchimg').innerText = this.isEn ? 'Switching to you for' : '字幕切换到'
    this.modalHtml.querySelector('.switchimg').style.display = 'none'
    let eleControlbar = el.querySelector('.prism-controlbar')
    eleControlbar.appendChild(this.html)
    el.appendChild(this.modalHtml)
    player.on('textTrackReady', ({paramData}) => {
      this.captionList = paramData
      let lis_ele = paramData.map(v => {
        return `<li data-def="${v.value}">${v.text}</li>`
      })
      this.html.querySelector('.caption-list').innerHTML = `<li style="background:rgba(88,87,86,.5);color:#fff">字幕</li>`+lis_ele.join('')
    })
    let currentCaptionEle = this.html.querySelector('.current-caption')
    let captionListEle = this.html.querySelector('.caption-list')
    

    if (this.hasCreated == false && this.definition) {
      let li_target = captionListEle.querySelector(`li[data-def="${this.definition}"]`)
      li_target.className = 'current'
    }
    this.hasCreated = true

    let timeId = null
    currentCaptionEle.onclick = () => {
      captionListEle.style.display = 'block'
    }
    
    currentCaptionEle.onmouseleave = () =>{
      timeId = setTimeout(() => {
        captionListEle.style.display = 'none'
      }, 100);
    }

    captionListEle.onmouseenter = () => {
      clearTimeout(timeId)
    }
    captionListEle.onmouseleave = () => {
      captionListEle.style.display = 'none'
      // this.html.querySelector('.caption-modal').style.display = 'none'
      this.modalHtml.style.display = 'none'
    }

    captionListEle.onclick = ({target}) => {
      let definition = target.dataset.def
      if (definition) {
        if (target.className !== 'current') {
          let caption = this.captionList.find(v => v.value === definition)

          player._ccService.switch(caption.value)
          this.setCurrentCaption(caption.text, caption.value)
          this.modalHtml.style.display = 'block'
          this.modalHtml.querySelector('.switchimg').style.display = 'block'
          this.modalHtml.querySelector('span.current-caption-tag').innerText = caption.text
        } 
      }
    }
  }

  setCurrentCaption(caption, def) {
    let currentCaption = this.html.querySelector('.current-caption')
    currentCaption.innerText = caption
    currentCaption.dataset.def = def
    this.definition = def

    let captionListEle = this.html.querySelector('.caption-list')
    let currentEle = captionListEle.querySelector('.current')
    if (currentEle) {
      currentEle.className = ''
    }
    //let li_target = captionListEle.querySelector(`li[data-def="${def}"]`)
    let lis = captionListEle.querySelectorAll('li')
    lis.forEach(element => {
      let text = element.innerText
      if(text === caption){
        element.className = 'current'
      }
    });
    if (lis) {
      lis.className = 'current'
    }
  }

  created(player) {
    
  }

  ready(player) {
    this.modalHtml.style.display = 'none'
    // 隐藏设置里面的倍速播放
    let settingEle = document.querySelector('.prism-setting-item.prism-setting-cc')
    if (settingEle) {
     settingEle.classList.add('player-hidden')
    }
  }
}