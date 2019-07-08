# 微信小程序集成阿里云点播服务

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/vod-mini-program/README.md)

小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的，同理Web Aliplayer也是基于浏览器环境的，在微信小程序里不能运行，因此，需要使用小程序自带的Video组件去播放视频，下面就介绍如何在小程序里播放阿里云点播服务的视频。<br /><br />
## 基本功能
本Demo包含了播放列表、多分辨率、倍速播放，全屏播放等功能：<br />![image.png](https://player.alicdn.com/resource/mini/mini11.png)

## 实现介绍
### 获取视频信息流程
首先用户的Appserver需要提供两个接口服务，获取视频列表和获取视频信息接口，如果用户的小程序没有视频列表，那么只需要获取视频信息接口服务。<br />基本流程是客户端调用客户自己的App Server获取视频的列表，然后App Server调用点播[获取视频信息列表](https://help.aliyun.com/document_detail/52838.html)或者[批量获取视频信息](https://help.aliyun.com/document_detail/86042.html)Open API，在用户选中列表记录时， 根据videoId的值通过客户自己的App Server调用点播的[获取视频信息接口](https://help.aliyun.com/document_detail/56124.html)获取播放视频信息，此接口包含播放地址等信息，代码逻辑在service/service.js文件里。<br />![image.png](https://player.alicdn.com/resource/mini/mini31.png)

### 登记服务域名
微信小程序控制台注册AppServer的访问域名，登记以后就小程序就可以访问客户自己的App Server的服务，比如：<br />    ![image.png](https://player.alicdn.com/resource/mini/mini21.png)

### 注意点
#### 解决video的高层级问题
元素需要放到cover-view里面， 并且把cover-view作为Video的子元素，比如：

```html
<video
      id="videoPlayer"
      autoplay
      bindplay="videoPlayHandle"
      class="vod-video"
      bindtap="tapVideo"
      bindpause="playPaused"
      bindended="playPaused"
      bindtimeupdate="timeUpdate"
      bindfullscreenchange="fullScreen"
      poster="{{currentPoster}}"
      src="{{currentResource}}"
      bindwaiting="videoWaiting">
        <cover-view class="video-control" hidden="{{controlHidden}}" >
          <cover-view class="video-title">{{currentVideoTitle}}</cover-view>
          <cover-view class="multi" capture-catch:tap="switchResource">{{currentDefinition}}</cover-view>
          <cover-view class="multi rate" capture-catch:tap="showSwitchRate">x {{currentRate}}</cover-view>
        </cover-view>
  </video>
```

#### Android全屏tab事件失效问题
Android里全屏播放，tab事件会失效，引起自定义控制栏不能显示、倍速选择和清晰度选择不能隐藏，Demo里在全屏时会一直有自定义控制栏，如果用户需要隐藏，则可以自己实现一个点击提示按钮，允许用户点击隐藏和显示，倍速选择和清晰度选择Demo已经添加了关闭按钮，可以点击关闭， 效果如下： <br />![image.png](https://player.alicdn.com/resource/mini/mini41.png)




