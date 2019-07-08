## Demo of Vue-based ApsaraVideo Player

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/H5VodVueDemo/README.zh_CN.md)

This demo is a Vue-based single-page application that uses ApsaraVideo Player SDK for web to play on-demand videos. This demo provides features such as playlist, subtitle, multi-language, adaptive bitrate, and custom skin. For more information, see [ApsaraVideo Player for web.](https://help.aliyun.com/document_detail/51991.html?spm=a2c4g.11186623.6.708.Sfv1et)

![Mobile edition](https://player.alicdn.com/aliplayer/img/h5vuedemo.png)

## Usage

### Install dependencies

This demo depends on [Vue](https://vuejs.org/), [webpack 4.X](https://webpack.js.org/), [axios](https://github.com/axios/axios), and [Babel.](https://babeljs.io/)

```bash
$ npm install
```

### Development environment

For macOS and Linux:

```bash
$ npm run dev
```

For Windows:

```bash
$ npm run dev_win
```

### Publish the application

Run the `$ npm run build` command to package dependencies into the disk directory. You need to modify the reference path of jQuery in index.html because jQuery is not packaged separately.

For macOS and Linux:

```bash
$ npm run build
```

For Windows:

```bash
$ npm run build_win
```

