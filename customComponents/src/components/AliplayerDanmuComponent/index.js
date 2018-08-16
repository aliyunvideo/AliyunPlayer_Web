import danmuHtml from './index.html'
import danmuControl from './danmu-control.html'
import './index.scss'
import {CommentManager} from 'comment-core-library/build/CommentCoreLibrary'
import 'comment-core-library/build/style.css'
import { parseDom } from 'utils'

export default class AliplayerDanmuComponent {
  /**
   * @constructor 弹幕组件构造函数
   * @param {Array danmuList 弹幕数组, 参考 CommentCoreLibrary 文档 https://github.com/jabbany/CommentCoreLibrary/}
   */
  constructor (danmukuList) {
    this.danmukuList = danmukuList
    this.html = parseDom(danmuHtml)
    this.danmuControlHtml = parseDom(danmuControl)
    this.CM = null
    this.userDanmuOpen = true     // 用户打开关闭弹幕的状态, 默认为 true 打开
  }

  createEl (el) {
    el.querySelector('.prism-controlbar').appendChild(this.danmuControlHtml)
    let videoSiblingElement = el.querySelector('video').nextElementSibling
    if (videoSiblingElement) {
      el.insertBefore(this.html, videoSiblingElement)      
    } else {
      el.appendChild(this.html)
    }
    this.CM = new CommentManager(this.html.querySelector('.danmu'))     // 初始化 CommentManager

    this.CM.init()
    this.CM.load(this.danmukuList)

    /* 根据视频播放器的 timeupdate 事件更新弹幕的事件轴   */
    el.querySelector('video').ontimeupdate = () => {
      if (el.querySelector('video') !== null) {
        this.CM.time(el.querySelector('video').currentTime * 1000)        
      }
    }

    let danmuCloseElement = this.danmuControlHtml.querySelector('.icon-danmu-close')
    let danmuOpenElement = this.danmuControlHtml.querySelector('.icon-danmu-open')
    /* 绑定控制条关闭弹幕处理函数 */
    danmuCloseElement.onclick = () => {
      this.userDanmuOpen = false
      danmuCloseElement.style.display = 'none'
      danmuOpenElement.style.display = 'inline-block'
      this.CM.clear()
      this.CM.stop()
    }
    /* 绑定控制条打开弹幕控制条 */
    danmuOpenElement.onclick = () => {
      danmuOpenElement.style.display = 'none'
      danmuCloseElement.style.display = 'inline-block'
      this.userDanmuOpen = true
      this.CM.start()
    }

    let danmuInput = this.danmuControlHtml.querySelector('.danmu-input input')
    let danmuEnter = this.danmuControlHtml.querySelector('.danmu-input-enter')

    danmuEnter.onclick = this.sendDanmuHandle.bind(this)

    danmuInput.onkeydown = (e) => {
      if (e.keyCode === 13) {
        this.sendDanmuHandle.call(this)
      }
    }
  }

  // 弹幕发送按钮点击事件和弹幕输入框按下 enter 键, 处理事件
  sendDanmuHandle () {
    let danmuInput = this.danmuControlHtml.querySelector('.danmu-input input')
    let danmuText = danmuInput.value
    let commentSize = [16, 18, 25, 36, 45]
    let commentColor = [0xffffff, 0x0000ff, 0xcc0000, 0xff66ff, 0xffff33]
    if (danmuText === '') {
      return
    }

    this.send({
      "mode": 1,
      "text": danmuText,
      "stime": 1000,
      "size": commentSize[this.randomIndex(5)],
      "color": commentColor[this.randomIndex(5)]
    })
    danmuInput.value = ''
    danmuInput.focus()
  }

  randomIndex (max) {
    return Math.floor(Math.random() * max)
  }

  play (player, e) {
    if (this.userDanmuOpen) {
      this.CM.start()
    }
  }

  pause (player, e) {
    if (this.userDanmuOpen) {
      this.CM.stop()
    }
  }

  send (danmuku) {
    this.CM.send(danmuku)
  }

  /**
   * 暴露出去的插入弹幕的方法
   * @param {Object danmuku 弹幕对象 只能一条一条插入}
   */
  insert (danmuku) {
    this.CM && this.CM.insert(danmuku)
  }
}