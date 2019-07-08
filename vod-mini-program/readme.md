# Demo of WeChat applet that integrates ApsaraVideo for VOD

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/vod-mini-program/README.zh_CN.md)

In a WeChat applet, the logic layer and rendering layer are separated. The logic layer runs in JSCore without a complete browser object. Therefore, no DOM API or BOM API is available. In this case, libraries that are commonly used in frontend development, such as jQuery and Zepto, cannot run in the WeChat applet. Similarly, the browser-based ApsaraVideo Player for web cannot run in the WeChat applet either. Therefore, you need to use the default video component provided by the WeChat applet to play videos. This demo illustrates how to play videos of ApsaraVideo for VOD in a WeChat applet.<br /><br />

## Basic features

This demo provides features such as playlist, multi-definition, playback speed adjustment, and full-screen playback.<br />![image.png](https://player.alicdn.com/resource/mini/mini11.png)

## Implementation

### Obtain video information

Your AppServer must provide the methods for obtaining the video list and video information. If your applet does not need to display the video list, the AppServer only needs to provide the method for obtaining video information. <br />The basic process is as follows: The applet calls the method provided by the AppServer to obtain the video list, and the AppServer calls the [GetVideoList](https://help.aliyun.com/document_detail/52838.html) or [GetVideoInfos](https://help.aliyun.com/document_detail/86042.html) operations to obtain the video list from ApsaraVideo for VOD. When a user selects a video in the video list, the AppServer calls the [GetVideoInfo](https://help.aliyun.com/document_detail/56124.html) operation of ApsaraVideo for VOD to obtain the video information based on the video ID. The GetVideoInfo operation returns information such as the playback URL. The code is in the service/service.js file. <br />![image.png](https://player.alicdn.com/resource/mini/mini31.png)

### Register a service domain name

You need to register the domain name of the AppServer in the WeChat applet console, as shown in the following figure. After the registration, the applet can access your AppServer.<br />![image.png](https://player.alicdn.com/resource/mini/mini21.png)

### Precautions

#### Resolve the high-layer issue of video

Put elements in cover-view and set cover-view as a sub-element of video. Example:

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

#### Resolve the issue of tab event failure when a video is played in full screen on an Android device

When a video is played in full screen on an Android device, the tab event is invalid. As a result, the custom control bar cannot be displayed, and the speed and definition settings cannot be hidden. In this demo, the custom control bar is always displayed in full-screen mode. You can implement a button for displaying or hiding the control bar. This demo also provides the close button for the speed and definition settings, so that users can tap the button to hide the settings. The following figure shows the full-screen playback effect. <br />![image.png](https://player.alicdn.com/resource/mini/mini41.png)

