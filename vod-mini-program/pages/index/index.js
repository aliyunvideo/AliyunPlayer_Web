import { getToken, getVideoList, getVideoById } from '../../service/index.js'

const serviceError = function(msg) {
  wx.showToast({
    title: msg || '获取数据出错',
    icon: 'none'
  })
}

Page({
  data: {
    page: 1,
    size: 5,
    userInfo: null,
    videoList: [],
    total: 0,
    loading: false,
    loadAll: false,
    currentResource: '',
    multiListShow: false,

    rateShow: false,
    currentRate: '1.0',

    videoPlaying: false,
    controlHidden: true,

    currentTime: 0,

    isSwitchDefinition: false,

    currentVideoId: '',
    currentPoster: '',
    currentVideoTitle: '',
    currentVideoResource: [],
    currentDefinition: '',
    isAndroid: false,

    fullScreenData: "",
  },

  // 视频缓冲触发事件
  videoWaiting () {
    this.setData({
      controlHidden: true
    })
  },

  computedDef (definition) {
    let def = {
      FD: "流畅",
      LD: "标清",
      SD: "高清",
      HD: "超清",
      OD: "原画",
      "2K": "2K",
      "4K": "4K",
    }
    return def[definition]
  },

  videoPlayHandle (e) {
    console.log('videoPlayHandle')
    this.data.videoPlaying = true
    this.setData({
      controlHidden: false,
      multiListShow: false
    })
    this.videoContext.playbackRate(Number(this.data.currentRate))
    if (this.data.isSwitchDefinition) {
      console.log('seek')
      this.videoContext.seek(this.data.currentTime)
      this.data.isSwitchDefinition = false
    }

  },

  closeControl () {
    this.setData({
      multiListShow: false,
      rateShow: false
    })
  },

  tapVideo(e) {
    console.log(e)
    console.log('tapVideo')
    this.setData({
      multiListShow: false,
      rateShow: false,
    })
    console.log(this.data.videoPlaying)
    if (this.data.videoPlaying && !this.data.fullScreenData) {
      this.setData({
        controlHidden: !this.data.controlHidden
      })
    }
  },

  switchResource() {
    console.log('switch')
    this.setData({
      multiListShow: true
    })
  },

  showSwitchRate(rate) {
    this.setData({
      rateShow: true
    })
  },

  switchRate(e) {
    let dataset = e.currentTarget.dataset
    let { rate } = dataset
    console.log(this.data.videoplaying)
    if (this.data.videoplaying) {
      this.videoContext.playbackRate(Number(rate))      
    }
    this.setData({
      currentRate: rate,
      rateShow: false
    })
  },

  switchDefinition (e) {
    this.data.isSwitchDefinition = true

    let dataset = e.currentTarget.dataset
    let { url, def } = dataset
    this.setData({
      currentResource: url,
      currentDefinition: def,
      multiListShow: false,
    })
  },

  onLoad() {
    const res = wx.getSystemInfoSync()
    console.log(res.SDKVersion)

    this.loadData()
    try {
      const res = wx.getSystemInfoSync()

      if (res.system.toLowerCase().indexOf('android') > -1) {
        this.data.isAndroid = true
      }
    } catch (e) {
      console.log(e)
    }
  },

  onReady() {
    this.videoContext = wx.createVideoContext('videoPlayer')
    console.log(this.videoContext)
  },

  onPullDownRefresh() {
    this.setData({
      loadAll: false,
      page: 1,
      total: 0,
      videoList: [],
    })
    this.loadData(() => {
      wx.stopPullDownRefresh()
    })
  },

  tapPlay(e) {
    let vid = e.currentTarget.dataset['vid']
    this.playVideo(vid)
  },

  playVideo(vid) {
    if (!this.videoContext) {
      this.videoContext = wx.createVideoContext('videoPlayer')
    }
    // this.videoContext.stop()
    this.data.videoPlaying = false
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
    getVideoById({
      url: '/vodVideo/getVideoById',
      data: {
        videoId: vid
      }
    })
      .then(({data}) => {
        wx.hideLoading()
        console.log(data)
        let currentVideoId = vid
        let currentPoster = data.videoBase.coverURL
        let currentResource = data.playInfoList[0].playURL
        let currentVideoTitle = data.videoBase.title
        let currentVideoResource = data.playInfoList.map(item => {
          item.definitionFormat = this.computedDef(item.definition)
          return item
        })
        this.setData({
          currentVideoId,
          currentPoster,
          currentVideoTitle,
          currentResource,
          currentVideoResource,
          currentDefinition: currentVideoResource[0].definitionFormat
        })
        
        // this.videoContext.play()
      })
      .catch( err => {
        wx.hideLoading()
        console.log(err)
        serviceError('获取播放地址失败')
      })
  },

  timeUpdate (e) {
    let { currentTime } = e.detail
    this.data.currentTime = currentTime
    this.data.videoplaying = true
  },

  playPaused() {
    this.data.videoplaying = false
  },

  fullScreen(e) {
    let { fullScreen, direction } = e.detail
    console.log(e)
    let fullScreenData = ""
    if (fullScreen) {
      fullScreenData = " full-screen " + direction
      this.setData({ controlHidden: false })
    }
    console.log({ fullScreen, direction })
    this.setData({ fullScreenData })
    console.log(this.data.fullScreenData)
  },

  loadData(cb) {
    if (this.data.loadAll || this.data.loading) {
      return
    }
    if (this.data.userInfo !== null) {
      this.getVideoList(cb)
    } else {
      getToken({ url: '/user/randomUser' })
        .then(({data}) => {
          console.log(data)
          this.data.userInfo = data
          this.getVideoList()
        })
        .catch(err => {
          serviceError('获取token失败')
          console.log(err)
        })
    }
  },
  getVideoList(cb) {
    this.loading = true
    if (this.data.userInfo === null) {
      reject(new Error('no user'))
    } else {
      let { token } = this.data.userInfo
      let { page, size } = this.data
      getVideoList({
        url: '/vod/getRecommendVideoList',
        data: {
          token,
          pageIndex: page,
          pageSize: size,
        }
      })
        .then(({ data }) => {

          if (page === 1) {
            this.playVideo(data.videoList[0].videoId)
          }

          this.loading = false
          let loadAll = false
          if ((page + 1) * size >= data.total) {
            loadAll = true
          }
          data.videoList.forEach(item => item.duration = this.getVideoTime(item.duration))
          this.setData({
            loadAll,
            total: data.total,
            page: page + 1,
            videoList: this.data.videoList.concat(data.videoList)
          })
          typeof cb === 'function' && cb();
        })
        .catch(err => {
          this.loading = false
          serviceError('获取视频列表失败')
          typeof cb === 'function' && cb();
        })
    }
  },
  getVideoTime (duration) {
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
})
