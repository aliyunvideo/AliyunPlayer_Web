## 阿里云Aliplayer播放器直播点播在PC端和移动端的综合例子

包含播放、播放列表、评论、客户端长连接mqtt、支持在android微信全屏H5同层播放，解决android微信弹出全屏播放的问题等功能， 

根据设备类型自定选择移动版或桌面版播放。

[体验demo](https://player.alicdn.com)

## 桌面版

![桌面版](https://player.alicdn.com/aliplayer/img/pclive1.png) ![桌面版](https://player.alicdn.com/aliplayer/img/pclive2.png)

## 移动版

![移动版](https://player.alicdn.com/aliplayer/img/reacth5live.png)  

## 特性

- 使用Prismplayer播放器
- 动态跳转到PC端或移动端页面
- 使用 React, ES6 & Babel 6
- 使用Webpack编译
- 支持 [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code

## 如何使用

### 安装依赖项

 - [Node.js](https://nodejs.org/en/)
 - [Webpack2.0](http://webpack.github.io) 
 - [gulp](https://gulpjs.com)

```bash
$ https://github.com/aliyunvideo/AliyunPlayer_Web.git <foldername>
$ cd <foldername>
$ npm install
```

### 运行移动端

```bash
$ npm run mobile
```

### 运行PC端

```bash
$ npm run pc
```

### 编译产品

```bash
$ npm run prod
```

## License

MIT
