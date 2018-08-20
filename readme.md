## Aliplayer web播放器场景化和自动定义组件Demo

每个例子都是独立的，方便单独使用，现在使用webpack配置文件都是基于2.0版本的，如果使用最新的4.0版本，需要自己重写webpack的配置，如果不想手工安装webpack2.0， 可以直接[下载依赖项](https://player.alicdn.com/aliplayer/node_modules.zip)，直接存放于使用例子的文件夹下面。

### Vue点播demo

包含播放、播放列表、字幕、多语言、自适应码率，皮肤自定义等功能。

[说明文档和代码](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/H5VodVueDemo)

![移动版](https://player.alicdn.com/aliplayer/img/h5vuedemo.png) 

### 点播demo

包含播放、播放列表、评论、点赞、客户端长连接mqtt等功能，支持在android微信全屏H5同层播放，解决android微信弹出全屏播放的问题。

[说明文档和代码](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/h5VodDemo)

![移动版](https://player.alicdn.com/aliplayer/img/h5demosmall.png) 

### 直播demo

包含全屏播放、评论、点赞、客户端长连接mqtt等功能，支持在android微信全屏同层播放，解决android微信弹出全屏播放的问题。

[说明文档和代码](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/h5LiveDemo)

![移动版](https://player.alicdn.com/aliplayer/img/h5livedemo.png) 

### 多平台点播直播Demo

包含播放、播放列表、评论、客户端长连接mqtt等功能，支持在android微信全屏H5同层播放，解决android微信弹出全屏播放的问题， 

根据设备类型自定选择移动版或桌面版播放。

[说明文档和代码](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/multiPlatformLiveDemo)

#### 桌面版

![桌面版](https://player.alicdn.com/aliplayer/img/pclive11.png) ![桌面版](https://player.alicdn.com/aliplayer/img/pclive21.png)

#### 移动版

![移动版](https://player.alicdn.com/aliplayer/img/reacth5live1.png) 

### 自定义组件demo

此Demo关于H5播放器的自定义组件，可以作为自定义组件如何实现的参考，在这里也可以找到一些常用的自定义组件:

- [记忆播放](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/MemoryPlayComponent)
- [开始广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/StartADComponent)
- [暂停广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PauseADComponent)
- [播放下一个](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/playerNextComponent)
- [播放列表](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PlaylistComponent)
- [旋转和镜像](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RotateMirrorComponent)
- [视频广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/VideoADComponent) 移动端可能视频会被浏览器劫持播放
- [弹幕](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/AliplayerDanmuComponent) 使用了第三方的弹幕库[CommentCoreLibrary](https://github.com/jabbany/CommentCoreLibrary/)
- [试看](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/PreviewComponent)

[说明文档和代码](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents)

![移动版](https://player.alicdn.com/aliplayer/img/ad1.png) 

