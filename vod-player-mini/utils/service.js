//获取应用实例
const HOST = 'https://alivc-demo.aliyuncs.com'
const request = function(options) {
  return new Promise((resolve, reject) => {
    options.url = HOST + options.url
    options.success = ({data}) => {
      resolve(data)
    }
    options.fail = reject
    wx.request(options)
  })
}

export const getToken = (options) => {
  return request(options)
}

export const getVideoList  = (options) => {
  return request(options)
}

export const getVideoById = (options) => {
  return request(options)
}