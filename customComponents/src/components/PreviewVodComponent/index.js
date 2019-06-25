import previewHtml from './index.html'
import './index.scss'
import { parseDom } from 'utils'

/**
 * 结合点播服务的试看组件
 */
export default class PreviewVodComponent {
  /**
   * @constructor 试看组件构造函数
   * @param {Number previewDuration 试看时长单位为秒, 传入0表示可以完整观看}
   * @param {String previewEndHtml 可选参数, 插入到试看结束之后显示的 dom 字符串, 默认为 null}
   * @param {String previewBarHtml 可选参数, 插入到免费试看多少分钟之后的 html}
   */
  constructor(previewDuration, previewEndHtml = null, previewBarHtml = null){
    this.previewDuration = previewDuration
    this.html = parseDom(previewHtml)

    // 在试看结束之后, 如果用户自定义
    if (previewEndHtml !== null) {
      this.insertHTtml(previewEndHtml, 'previewEndHtml')
    }
    if (previewBarHtml !== null) {
      this.insertHTtml(previewBarHtml, 'previewBarHtml')
    }

  }

  play(player) {
    if (this.previewEnd) {
      player._el.querySelector('.center').classList.remove('preview-hide')
      player.seek(0)
      this.previewEnd = false
    }
  }

  insertHTtml(idOrHmtl, params) {
    let parentSelector = params === 'previewEndHtml' ? '.preview-custom' : '.preview-custom-bar'
    let parentEle = this.html.querySelector(parentSelector)
    if (typeof idOrHmtl === 'string') {
      if (idOrHmtl[0] === '#') {
        let templeteEle = document.querySelector(idOrHmtl)
        if (templeteEle) {
          parentEle.innerHTML = templeteEle.innerHTML
        } else {
          console.warn(`[aliplayer components warn]: Invalid parameter ${params}, can't find element by this id`)
        }
      } else {
        parentEle.innerHTML = idOrHmtl
      }
    } else {
      console.warn(`[aliplayer components warn]: Invalid parameter ${params}, ${params} must be a string type`)
    }
  }

  ready(player) {
    let videoDuration = parseInt(player.getDuration())
    this.videoDuration = videoDuration
    if (!this.invalidPreview && this.previewDuration >= videoDuration) {
      this.invalidPreview = true 
      console.warn(`[aliplayer components warn]: Invalid parameter previewDuration, previewDuration must be less than the video duration!`)
    }
    if (this.previewDuration !== 0 && this.previewDuration < videoDuration) {
      this.html.style.display = 'block'
    }
  }

  createEl(el, player) {
    const lang = player._options && player._options.language
    this.isEn = lang && lang === 'en-us'
    console.log(this.html.querySelector('.preview-default'))
    let previewDefaultEle = this.html.querySelector('.preview-default')
    if (previewDefaultEle) {
      previewDefaultEle.innerText = this.isEn ? 'Preview is over' : '试看已结束'
    }
    this.html.querySelector('.can-preview').innerText = this.isEn ? 'Try' : '可试看'

    let previewDuration = this.previewDuration
    if (previewDuration === 0) {
      this.html.style.display = 'none'
    }

    let previewDuration_text = previewDuration / 60
    let decimal = previewDuration_text.toString().split('.')[1]
    if (decimal && decimal.length > 1) {
      previewDuration_text = ' ' + previewDuration + (this.isEn ? ' senconds' : ' 秒')
    } else {
      previewDuration_text = ' ' + previewDuration_text + (this.isEn ? ' minutes' : ' 分钟')
    }
    if (previewDuration < 60) {
      previewDuration_text = ' ' + previewDuration + (this.isEn ? ' senconds' : ' 秒')
    }

    // 考虑到可能不是整分钟数, 整分钟数去掉小数点后面的 0
    this.html.querySelector('.preview-time').innerText = previewDuration_text

    let videoSiblingElement = el.querySelector('video').nextElementSibling
    if (videoSiblingElement) {
      el.insertBefore(this.html, videoSiblingElement)
    } else {
      el.appendChild(this.html)
    }

    let closeSpan = this.html.querySelector('.preview-vod-close')
    closeSpan.addEventListener('click', () => {
      this.html.querySelector('.preview-component-tip').style.display = 'none'
    })
    player.setPreviewTime(Number(this.previewDuration))

  }

  closePreviewLayer() {
    this.previewEnd = false
    this.html.querySelector('.preview-component-layer').style.display = 'none'
  }

  timeupdate(player) {
    if (!this.previewEnd && this.previewDuration !== 0 && this.previewDuration < this.videoDuration) {
      let previewTime  = player.getPreviewTime()
      let currentTime = player.getCurrentTime()
      if (Math.floor(previewTime) < currentTime) {
        this.previewEnd = true
        player._el.querySelector('.center').classList.add('preview-hide')
        player.seek(previewTime)
        player.pause()
        this.html.querySelector('.preview-component-layer').style.display = 'block'
      }
    }
  }

  ended(player, e) {
    if (player.isPreview()) {
      this.html.querySelector('.preview-component-layer').style.display = 'block'
    }
  }
}