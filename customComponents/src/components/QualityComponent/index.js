import qualityHtml from './index.html'
import qualityModal from './quality-modal.html'
import './index.scss'
import { parseDom, cookieSet } from 'utils'

/**
 * 切换清晰度组件
 */
export default class QualityComponent {
  constructor(getQuality) {
    this.html = parseDom(qualityHtml)
    this.modalHtml = parseDom(qualityModal)
    this.hasCreated = false
    this.definition = ''
    this.getQuality = getQuality
    this._levels = [];
  }

  createEl (el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    this.html.querySelector('.current-quality').innerText = this.isEn ? 'Resolution' : '清晰度'
    this.modalHtml.querySelector('.switchimg').innerText = this.isEn ? 'Switching to you for' : '正在为您切换到'
    this.modalHtml.querySelector('.wait').innerText = this.isEn ? 'Please wait...' : '请稍候...'
    let eleControlbar = el.querySelector('.prism-controlbar')
    eleControlbar.appendChild(this.html)
    el.appendChild(this.modalHtml)
  }

  setCurrentQuality(quality, def) {
    let currentQuality = this.html.querySelector('.current-quality')
    currentQuality.innerText = quality || ''
    currentQuality.dataset.def = def
    this.definition = def

    let qualityListEle = this.html.querySelector('.quality-list')
    let currentEle = qualityListEle.querySelector('.current')
    if (currentEle) {
      currentEle.className = ''
    }
    let li_target = qualityListEle.querySelector(`li[data-def="${def}"]`)
    if (li_target) {
      li_target.className = 'current'
    }
  }

  created(player) {
    this._urls = player._urls

    let currentQualityEle = this.html.querySelector('.current-quality')
    let qualityListEle = this.html.querySelector('.quality-list')
    qualityListEle.style.display = 'none';

    player.on('settingListHide', () => {
      qualityListEle.style.display = 'none';
    })
    player.on('selectorUpdateList', (param) => {
      if (param.paramData.type !== 'quality') return;
      if (!player.getOptions().isVBR) return;
      let levels = player._qualityService.levels;
      this._levels = (levels || []).map(item => ({ ...item, definition: item.bitrate || 'AUTO'/* 多码率的时候没有 definition */ }));
      let lis_ele = this._levels.map(url => {
        return `<li data-def="${url.definition}">${url.desc}</li>`
      })
      qualityListEle.innerHTML = lis_ele.join('')

      currentQualityEle.style.width = '100px';
      qualityListEle.style.width = '100px';

      const desc = this._levels.find(level => level.definition === this.definition)?.desc;
      this.setCurrentQuality(desc, this.definition); // later than 'sourceloaded'
    })

    let lis_ele = this._urls.map(url => {
      return `<li data-def="${url.definition}">${url.desc}</li>`
    })
    qualityListEle.innerHTML = lis_ele.join('')

    if (this.hasCreated == false && this.definition) {
      let li_target = qualityListEle.querySelector(`li[data-def="${this.definition}"]`)
      li_target.className = 'current'
    }
    this.hasCreated = true

    let timeId = null

    currentQualityEle.onclick = () => {
      const listVisible = qualityListEle.style.display !== 'none'
      if (listVisible) {
        qualityListEle.style.display = 'none'
      } else {
        qualityListEle.style.display = 'block'
      }
    }

    currentQualityEle.onmouseleave = () =>{
      if (timeId) clearTimeout(timeId)
      timeId = setTimeout(() => {
        qualityListEle.style.display = 'none'
      }, 150);
    }

    qualityListEle.onmouseenter = () => {
      clearTimeout(timeId)
    }
    qualityListEle.onmouseleave = () => {
      if (timeId) clearTimeout(timeId)
      timeId = setTimeout(() => {
        qualityListEle.style.display = 'none'
      }, 150);
    }

    qualityListEle.onclick = ({target}) => {
      let definition = target.dataset.def
      let desc = target.innerText
      if (definition && target.className !== 'current') {
        let url = (this._levels?.length > 0 ? this._levels : this._urls).find(url => String(url.definition) === definition)
        if (url) {
          cookieSet('selectedStreamLevel', url.definition, 365);

          if (player._switchLevel && !player._options.isLive && player._options.isVBR) {
            let targetLevel = this._levels.find(level => Number(level.bitrate) === Number(definition));
            player._switchLevel(url.Url, targetLevel);
          }
          else {
            player._loadByUrlInner(url.Url, player.getCurrentTime(), true /*autoPlay*/);
          }

          this.setCurrentQuality(url.desc, url.definition)

          this.modalHtml.style.display = 'block'
          this.modalHtml.querySelector('span.current-quality-tag').innerText = url.desc
          setTimeout(() => {
            this.modalHtml.style.display = 'none';
          }, 2000);
        } 
      }
      if (typeof this.getQuality === 'function') {
        //点击切换清晰度时，调用这个方法
        this.getQuality(definition,desc)
      }
    }
  }

  ready(player) {
    this.modalHtml.style.display = 'none'
    // 隐藏设置里面的倍速播放
    let settingEle = document.querySelector('.prism-setting-item.prism-setting-quality')
    if (settingEle) {
     settingEle.classList.add('player-hidden')
    }
  }
}
