## Demo of HTML5-based ApsaraVideo Player for live streaming

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/h5LiveDemo/README.zh_CN.md)

This demo provides features such as full-screen playback, comment, like, and MQTT persistent session. This demo supports HTML5-based full-screen same-layer playback in WeChat for Android to resolve the full-screen playback issue.

## [Demo](https://player.alicdn.com/aliplayer/)

## [Reference](https://player.alicdn.com/aliplayer/docs/blogs/how-to-handle-h5-same-layer.html)

## [Implementation reference](http://www.jianshu.com/p/4ac1aa9fd087)

![Mobile edition](https://player.alicdn.com/aliplayer/img/h5livedemo.png)

### Install dependencies

This demo uses technologies such as ES6, webpack, and gulp.

- [Node.js](https://nodejs.org/en/)
- [webpack 2.0](http://webpack.github.io)
- [gulp](https://gulpjs.com)

```sh
$ cd h5LiveDemo
$ npm install
```

### Compile the code

#### Development environment

Start the webpack-dev-server microservice, which can monitor file changes and package files in real time. This microservice also supports hot module replacement (HMR).

```sh
$ cd h5livedemo
$ npm run dev
```

#### Production environment

For macOS and Linux:

```sh
$ cd h5livedemo
$ npm run prod
```

For Windows:

```sh
$ cd h5livedemo
$ npm run prod_win
```

