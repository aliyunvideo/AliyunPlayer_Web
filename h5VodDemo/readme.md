## Aliplayer播放器H5点播demo

包含播放、播放列表、评论、点赞、客户端长连接mqtt、支持在android微信全屏H5同层播放，解决android微信弹出全屏播放的问题等功能。

### 问题说明

#### 同层播放

在Android手机上浏览器(比如：微信)播放视频时，浏览器会劫持视频的播放，使用的是浏览器自带的播放器弹出全屏播放视频，而且会覆盖Dom元素，对于这部分案例没有有效的办法解决，但是由于X5内核的浏览器（微信、QQ浏览器）提供了一些属性可以解决不劫持视频的播放和覆盖Dom元素，腾讯命名为同层播放，只针对Android的X5内核浏览器。但是由于播放器时X5浏览器还是还弹出一层覆盖播放， 上部还是会保留退出和分享按钮，下部会有黑边，布局可能会和原来的界面有点不一样，这就需要用户通过订阅x5requestFullScreen和x5cancelFullScreen事件微调布局

#### 直接退出程序

现在当弹出全屏同层播放时， 左上角有返回按钮，当点击此按钮时，会退出后直接关闭页面，代码在videoplayer/index.js：


```sh

//微信左上角退出按钮触发时关闭页面
this.player.tag.addEventListener("x5videoexitfullscreen", ()=>{
    if(WeixinJSBridge)
        WeixinJSBridge.call('closeWindow');
});


```

如果不希望退出后直接关闭页面，可以在代码中对上面的代码添加注释。

#### [Aliplayer官方文档](https://help.aliyun.com/document_detail/51991.html?spm=5176.doc62941.6.704.Lcuzlc)

#### [体验demo](https://player.alicdn.com/aliplayer/)

#### [参考文章](https://help.aliyun.com/document_detail/62953.html?spm=5176.doc51991.2.21.c1yAdY)

#### [实现介绍文章](http://www.jianshu.com/p/4ac1aa9fd087)

![移动版](https://player.alicdn.com/aliplayer/img/h5demosmall.png)  

### 安装依赖项

本Demo使用了ES6、webpack、gulp等技术。

 - [Node.js](https://nodejs.org/en/)
 - [Webpack4.0](https://webpack.js.org/) 
 - [gulp](https://gulpjs.com)

```sh
$ cd h5VodDemo
$ npm install

```

### 编译

#### 开发环境

启动webpack dev server微服务，支持监听文件变化，实现时时打包，支持热模块替换。

```sh
$ cd h5demo
$ npm run dev
```

#### 产品环境

```sh
$ cd h5demo
$ npm run prod
```

#### Q&A 

[X5浏览器同层播放介绍](https://x5.tencent.com/tbs/guide/video.html)

Q：如何测试效果，确定进入了同层播放器？

A：安装新的tbs版本后，如果要测试效果，请杀掉微信进程，把系统时间往后调一天以上，再进入网页进行视频播放，如果微信的顶bar消失，进入了一个沉浸式的播放器，则是进了同层播放器。

Q：如何查看当前的的tbs版本？

A：在微信聊天窗口输入//gettbs 并发送，查看弹出的Toast上显示的tbsCoreVersion 是否等于36849 ，若是则tbs版本正确。注：这是之后进行测试的基础，这个版本一定要正确

Q：接入了同层播放器，在老版本的tbs是否会出问题？

A：对老版本不会产生影响。

Q：同层播放器在iOS上会生效吗？

A：目前的同层播放器只在Android（包括微信）上生效，暂时不支持iOS

Q：同层播放器顶部”<”和“…”按钮可以去掉吗？

A：不能

Q: 在微信TBS里如何区是否支持同层播放器

A: a)在微信等TBS里通过UA判断X5内核版本来区分,当版版本号>036849表示支持

UA示例:

Mozilla/5.0 (Linux; Android 4.4.4; OPPO R7 Build/KTU84P) AppleWebKit/537.36(KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.8 TBS/036849 Safari/537.36 MicroMessenger/6.3.27.861 NetType/WIFI Language/zh_CN

b)在QQ浏览器Android版本中,当浏览器版本>=7.1时开始支持

UA示例：

UserAgent: Mozilla/5.0 (Linux. U. Android 4.4.4. zhcn. OPPO R7 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/7.1 Mobile Safari/537.36

