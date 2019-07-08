## Demo of integrated ApsaraVideo Player that supports live streaming and VOD on both PCs and mobile devices

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/multiPlatformLiveDemo/README.zh_CN.md)

This demo provides features such as playback, playlist, comment, and MQTT persistent session. This demo supports HTML5-based full-screen same-layer playback in WeChat for Android to resolve the full-screen playback issue.

The desktop edition or mobile edition of the player is selected automatically based on the device type.

[Demo](https://player.alicdn.com)

## Desktop edition

![Desktop edition](https://player.alicdn.com/aliplayer/img/pclive11.png) ![Desktop edition](https://player.alicdn.com/aliplayer/img/pclive21.png)

## Mobile edition

![Mobile edition](https://player.alicdn.com/aliplayer/img/reacth5live1.png)

## Features

- Uses Prismplayer.
- Dynamically redirects to the webpage for PCs or webpage for mobile devices.
- Uses React, ES6, and Babel 6.
- Uses webpack for compilation.
- Supports [hot module replacement (HMR).](https://webpack.github.io/docs/hot-module-replacement.html)
- Automatically opens a new browser tab when webpack is loaded, and reloads the webpage when you modify the code.

## Usage

### Install dependencies

- [Node.js](https://nodejs.org/en/)
- [webpack 2.0](http://webpack.github.io)
- [gulp](https://gulpjs.com)

```bash
$ https://github.com/aliyunvideo/AliyunPlayer_Web.git <foldername>
$ cd <foldername>
$ npm install
```

### Run the mobile edition of the player

```bash
$ npm run mobile
```

### Run the desktop edition of the player

```bash
$ npm run pc
```

### Compile the code

For macOS and Linux:

```bash
$ npm run prod
```

For Windows:

```bash
$ npm run prod-windows
```

## License

MIT

