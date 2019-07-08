## 阿里云 Vue 播放器 demo

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/H5VodVueDemo/README.md)

基于 Vue 的播放器单页应用, 利用 web 播放器 sdk 进行视频点播，包含播放列表、字幕、多语言、自适应码率，皮肤自定义等功能 [Web播放器文档](https://help.aliyun.com/document_detail/51991.html?spm=a2c4g.11186623.6.708.Sfv1et)

![移动版](https://player.alicdn.com/aliplayer/img/h5vuedemo.png) 

## 如何使用

### 安装依赖项

主要依赖有 [Vue](https://vuejs.org/), [webpack 4.X](https://webpack.js.org/), [axios](https://github.com/axios/axios), [babel](https://babeljs.io/)

```bash
$ npm install
```

### 开发环境下

macOS, Linux系统下:

```bash
$ npm run dev
```

Windows系统下:

```bash
$ npm run dev_win
```

### 发布

通过`$ npm run build`命令, 将各种依赖打包到 disk 目录, jquery 没有单独打包, 所以 index.html 中需要修改 jquery 的引用路径。

macOS, Linux系统下:

```bash
$ npm run build
```

Windows系统下:

```bash
$ npm run build_win
```
