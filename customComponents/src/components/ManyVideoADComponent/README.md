## 多视频广告组件

在视频即将播放时, 实现多视频广告

### 使用方法

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'ManyVideoADComponent',
  type: AliPlayerComponent.ManyVideoADComponent,
  /* The video ad component has these parameters: adVideoSource, adLink, adCloseFunction, and closeText
   * adVideoSource {@String Required. The URL of the video ad. }
   * adLink {@String Required. The link of the ad page.}
   * adCloseFunction {@Function Optional. The click event handler for skipping the ad. The default action is skip ad.}
   * closeText {@String Optional. The text of the skip ad button. The default is 'Skip Ad'.}
   */
   args: [
            [
              {adVideo:'https://alivc-demo-cms.alicdn.com/video/videoAD.mp4',adVideoLink:'https://www.aliyun.com/product/live'},
              {adVideo:'https://player.alicdn.com/resource/player/qupai.mp4',adVideoLink:'https://www.aliyun.com/product/live2'},
              {adVideo:'https://player.alicdn.com/video/guanggao.mp4',adVideoLink:'https://www.aliyun.com/product/live3'}
            ],
            manyVideoAdClose, isEn ? 'Skip Ad' : 'VIP关闭广告'],
  }]
}]
```

该组件接收三个参数: 

> adVideoSource, adCloseFunction, closeText

- `adVideoSource`, `String`类型, 广告视频的视频地址
- `adCloseFunction`, 函数, 关闭广告的点击事件处理函数, 可选参数, 不传则默认关闭广告视频
- `closeText`, `String` 类型, 关闭广告的文字内容, 可选参数, 不传则默认为 '关闭广告'

> `adCloseFunction` 的参数就是视频广告本身, 可以调用视频广告暴露的接口, 一下实例是点击关闭广告之后弹出 confirm 的相关操作

```js
var adCloseFunction = function (manyVideoAd) {
  /* Register the pause event to pause the ad. */
  manyVideoAd.pauseManyVideoAd()
  let result = confirm(manyVideoAd.isEn ? 'Become a VIP and skip the ad?' : '确定开通会员关闭广告吗？')
  if (result) {
    /* Register the skip event to skip the ad. */
    manyVideoAd.closeManyVideoAd()
  } else {
    /* Register the play event to play the ad. */
     manyVideoAd.playManyVideoAd()
  }
}
```

### 接口属性说明

- `pauseManyVideoAd` 暂停视频广告
- `closeManyVideoAd ` 关闭视频广告
- `playManyVideoAd` 播放视频广告