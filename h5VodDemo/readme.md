## Demo of HTML5-based ApsaraVideo Player for VOD

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/h5VodDemo/README.zh_CN.md)

This demo provides features such as playback, playlist, comment, like, and MQTT persistent session. This demo supports HTML5-based full-screen same-layer playback in WeChat for Android to resolve the full-screen playback issue.

### Issue description

#### Same-layer playback

When a video is played on a webpage, for example, in WeChat, on an Android device, the browser hijacks the playback of the video. That is, the browser uses its default player to play the video in full screen and overwrites the DOM element. Browsers (such as WeChat and QQ Browser) with the X5 kernel provide some properties to resolve this issue. The solution is called same-layer playback by Tencent. This solution applies only to X5-kernel browsers on Android devices. X5-kernel browsers resolve this issue by displaying a pop-up player above the webpage, with the exit and share buttons at the top and a black edge at the bottom. In this case, the layout may be slightly different from that of the original player. You need to subscribe to the x5requestFullScreen and x5cancelFullScreen events to tune the layout.

#### Player exiting

When a video is played in full-screen same-layer mode, the Exit button appears in the upper-left corner of the player. You can tap this button to exit the player and close the webpage. The code is in the videoplayer/index.js file.

```sh
// Close the webpage when the Exit button in the upper-left corner of the player is tapped in WeChat.
this.player.tag.addEventListener("x5videoexitfullscreen", ()=>{
    if(WeixinJSBridge)
        WeixinJSBridge.call('closeWindow');
});
```

If you do not want to close the webpage when exiting the player, you can comment out the preceding code.

#### [ApsaraVideo Player documentation](https://help.aliyun.com/document_detail/51991.html?spm=5176.doc62941.6.704.Lcuzlc)

#### [Demo](https://player.alicdn.com/aliplayer/)

#### [Reference](https://help.aliyun.com/document_detail/62953.html?spm=5176.doc51991.2.21.c1yAdY)

#### [Implementation reference](http://www.jianshu.com/p/4ac1aa9fd087)

![Mobile edition](https://player.alicdn.com/aliplayer/img/h5demosmall.png)

### Install dependencies

This demo uses technologies such as ES6, webpack, and gulp.

- [Node.js](https://nodejs.org/en/)
- [webpack 4.0](https://webpack.js.org/)
- [gulp](https://gulpjs.com)

```sh
$ cd h5VodDemo
$ npm install
```

### Compile the code

#### Development environment

Start the webpack-dev-server microservice, which can monitor file changes and package files in real time. This microservice also supports hot module replacement (HMR).

```sh
$ cd h5demo
$ npm run dev
```

#### Production environment

For macOS and Linux:

```sh
$ cd h5demo
$ npm run prod
```

For Windows:

```sh
$ cd h5demo
$ npm run prod_win
```

#### FAQ

[Introduction to same-layer playback in X5-kernel browsers](https://x5.tencent.com/tbs/guide/video.html)

Q: How do I ensure that I am using the same-layer player?

A: After installing Tencent Browsing Service (TBS) of the latest version, you can test the playback effect. To do so, terminate the WeChat process, set the system time to at least one day later than the current date, and play a video on a webpage. If the top bar of WeChat disappears and an immersive player appears, the video is played in the same-layer player.

Q: How do I check the TBS version?

A: Enter //gettbs in a WeChat chat window and send it. Check whether the value of tbsCoreVersion in the toast that appears is 36849. If yes, the TBS version is correct. Note: As the basis for subsequent tests, the TBS version must be correct.

Q: Is there any problem with TBS of an earlier version when I use the same-layer player?

A: TBS of an earlier version is not affected.

Q: Can I use the same-layer player on an iOS device?

A: Currently, you can use the same-layer player only in browsers (including WeChat) on Android devices. You cannot use the same-layer player on iOS devices.

Q: Can I hide the "<" (exit) and "..." (share) buttons on the top of the same-layer player?

A: No. You cannot hide the "<" and "..." buttons.

Q: How do I check whether TBS in Wechat supports the same-layer player?

A: a) For TBS in WeChat or other products, check the X5 kernel version in the user agent (UA). If the version number is greater than 036849, the same-layer player is supported.

UA example:

Mozilla/5.0 (Linux; Android 4.4.4; OPPO R7 Build/KTU84P) AppleWebKit/537.36(KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.8 TBS/036849 Safari/537.36 MicroMessenger/6.3.27.861 NetType/WIFI Language/zh_CN

b) Check the version of QQ Browser for Android. QQ Browser 7.1 and later versions support the same-layer player.

UA example:

UserAgent: Mozilla/5.0 (Linux. U. Android 4.4.4. zhcn. OPPO R7 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/7.1 Mobile Safari/537.36

