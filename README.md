## Scenario-based and custom-component demos of ApsaraVideo Player for web

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/README_zh_CN.md)

All the following demos can be used separately. Babel 7.0 and webpack 4.0 are used for configuration.

#### [Custom-component demo](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents)

#### [Vue-based demo](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/H5VodVueDemo)

#### [jQuery-based demo](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/h5VodDemo)

#### [React-based demo](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/multiPlatformLiveDemo/src/mobile)

#### [WeChat applet demo](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/vod-mini-program)

#### [Advanced features of ApsaraVideo Player](https://yq.aliyun.com/album/240)

### Custom-component demo

[Demo](https://player.alicdn.com/aliplayer/presentation/index.html)

[Introduction](https://yq.aliyun.com/articles/626454)

This demo illustrates the custom components of HTML5-based ApsaraVideo Player and can be used as a reference to implement custom components. In this demo, you can find the following common custom components:

- [Last position](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/MemoryPlayComponent)
- [Scrolling text](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/BulletScreenComponent)
- [Start ad](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/StartADComponent)
- [Pause ad](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PauseADComponent)
- [Play next](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/playerNextComponent)
- [Playlist](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PlaylistComponent)
- [Rotation and mirroring](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RotateMirrorComponent)
- [Video ad](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/VideoADComponent): On a mobile device, the browser may hijack the playback of the video ad.
- [Danmu](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/AliplayerDanmuComponent): uses the third-party danmu library [CommentCoreLibrary.](https://github.com/jabbany/CommentCoreLibrary/)
- [Preview](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PreviewVodComponent)
- [Playback speed](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RateComponent)
- [Definition](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/QualityComponent)
- [Progress marker](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/ProgressComponent)

[Instructions and code](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents)

![Mobile edition](https://player.alicdn.com/aliplayer/img/ad1.png)

### Demo of Vue-based ApsaraVideo Player for VOD

This demo provides features such as playback, playlist, subtitle, multi-language, adaptive bitrate, and custom skin.

[Instructions and code](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/H5VodVueDemo)

![Mobile edition](https://player.alicdn.com/aliplayer/img/h5vuedemo.png)

### Demo of HTML5-based ApsaraVideo Player for VOD

This demo provides features such as playback, playlist, comment, like, and MQTT persistent session. This demo supports HTML5-based full-screen same-layer playback in WeChat for Android to resolve the full-screen playback issue.

[Instructions and code](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/h5VodDemo)

![Mobile edition](https://player.alicdn.com/aliplayer/img/h5demosmall.png)

### Demo of WeChat applet that integrates ApsaraVideo for VOD

This demo provides features such as playlist, multi-definition, playback speed adjustment, and full-screen playback.

[Instructions and code](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/vod-mini-program)

![image.png](https://player.alicdn.com/resource/mini/mini11.png)

### Demo of ApsaraVideo Player for live streaming

This demo provides features such as full-screen playback, comment, like, and MQTT persistent session. This demo supports HTML5-based full-screen same-layer playback in WeChat for Android to resolve the full-screen playback issue.

[Instructions and code](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/h5LiveDemo)

![Mobile edition](https://player.alicdn.com/aliplayer/img/h5livedemo.png)

### Demo of integrated ApsaraVideo Player that supports live streaming and VOD on both PCs and mobile devices

This demo provides features such as playback, playlist, comment, and MQTT persistent session. This demo supports HTML5-based full-screen same-layer playback in WeChat for Android to resolve the full-screen playback issue.

The desktop edition or mobile edition of the player is selected automatically based on the device type.

[Instructions and code](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/multiPlatformLiveDemo)

#### Desktop edition

![Desktop edition](https://player.alicdn.com/aliplayer/img/pclive11.png) ![Desktop edition](https://player.alicdn.com/aliplayer/img/pclive21.png)

#### Mobile edition

![Mobile edition](https://player.alicdn.com/aliplayer/img/reacth5live1.png)

