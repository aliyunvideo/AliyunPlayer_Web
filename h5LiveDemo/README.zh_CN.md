## Aliplayer播放器H5 live demo

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/h5LiveDemo/README.md)

包含全屏播放、评论、点赞、客户端长连接mqtt、支持在android微信全屏同层播放，解决android微信弹出全屏播放的问题等功能。

## [体验demo](https://player.alicdn.com/aliplayer/)

## [参考文章](https://player.alicdn.com/aliplayer/docs/blogs/how-to-handle-h5-same-layer.html)

## [实现介绍文章](http://www.jianshu.com/p/4ac1aa9fd087)

![移动版](https://player.alicdn.com/aliplayer/img/h5livedemo.png)  

### 安装依赖项

本Demo使用了ES6、webpack、gulp等技术

 - [Node.js](https://nodejs.org/en/)
 - [Webpack2.0](http://webpack.github.io) 
 - [gulp](https://gulpjs.com)

```sh
$ cd h5LiveDemo
$ npm install
```

### 编译

#### 开发环境

启动webpack dev server微服务，支持监听文件变化，实现时时打包，支持热模块替换。

```sh
$ cd h5livedemo
$ npm run dev
```

#### 生产环境

macOS, Linux 系统:

```sh
$ cd h5livedemo
$ npm run prod
```

Windows 系统: 

```sh
$ cd h5livedemo
$ npm run prod_win
```

