## 视频广告组件

在视频即将播放时, 现实的视频广告

### 使用方法

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'VideoADComponent',
  type: AliPlayerComponent.VideoADComponent,
  /* The video ad component has these parameters: adVideoSource, adLink, adCloseFunction, and closeText
   * adVideoSource {@String Required. The URL of the video ad. }
   * adLink {@String Required. The link of the ad page.}
   * adCloseFunction {@Function Optional. The click event handler for skipping the ad. The default action is skip ad.}
   * closeText {@String Optional. The text of the skip ad button. The default is 'Skip Ad'.}
   */
  args: ['https://player.alicdn.com/ad/citybrain.mp4', 'https://et.aliyun.com/brain/city', videoAdClose, 'Skip Ad']
}]
```

该组件接收四个参数: 

> adVideoSource, adLink, adCloseFunction, closeText

- `adVideoSource`, `String`类型, 广告视频的视频地址
- `adLink`, `String` 类型, 广告视频的链接地址
- `adCloseFunction`, 函数, 关闭广告的点击事件处理函数, 可选参数, 不传则默认关闭广告视频
- `closeText`, `String` 类型, 关闭广告的文字内容, 可选参数, 不传则默认为 '关闭广告'

> `adCloseFunction` 的参数就是视频广告本身, 可以调用视频广告暴露的接口, 一下实例是点击关闭广告之后弹出 confirm 的相关操作

```js
var adCloseFunction = function (videoAd) {
  /* Register the pause event to pause the ad. */
  videoAd.pauseVideoAd()
  var result = confirm('Become a VIP and skip the ad?')
  if (result) {
    /* Register the skip event to skip the ad. */
    videoAd.closeVideoAd()
  } else {
    /* Register the play event to play the ad. */
    videoAd.playVideoAd()
  }
}
```

### 接口属性说明

- `pauseVideoAd` 暂停视频广告
- `closeVideoAd` 关闭视频广告
- `playVideoAd` 播放视频广告