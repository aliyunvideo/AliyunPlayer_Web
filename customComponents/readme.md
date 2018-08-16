## Aliplayer H5播放器的自定义组件

本项目包含Aliplayer H5播放器的自定义组件，可以作为自定义组件如何实现的参考，在这里也可以找到一些常用的自定义组件，包含第三方实现的。


## [介绍文章](https://player.alicdn.com/aliplayer/docs/blogs/how-to-implementment-custom-component.html)

## 例子

- ES6例子

- Aliplayer.Component的例子

##  插件列表

### 本项目插件

- [记忆播放](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/MemoryPlayComponent)
- [开始广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/StartADComponent)
- [暂停广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/PauseADComponent)
- [播放下一个](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/playerNextComponent)
- [播放列表](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/PlaylistComponent)
- [旋转和镜像](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/RotateMirrorComponent)
- [视频广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/VideoADComponent) 移动端可能视频会被浏览器劫持播放
- [弹幕](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/AliplayerDanmuComponent) 使用了第三方的弹幕库[CommentCoreLibrary](https://github.com/jabbany/CommentCoreLibrary/)
- [试看](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/PreviewComponent)

### 其他

## 如何使用

当只需要单独的某个组件时，只需要引用对应组件的JS文件，如果引用的是Aliplayer组件库文件，则通过AliPlayerComponent.XXX引用具体的组件。

### 引用具体的组件

- 在html文件中引用具体的JS文件

```sh

<script type="text/javascript" src="js/staticAdComponent.min.js"></script>

```

- 给播放器注入组件

```sh

 var option = {
     id: "J_prismPlayer",
     autoplay: true,
     isLive:false,
     playsinline:true,
     width:"100%",
     height:"100%",
     useH5Prism:true, //启用H5播放器
     useFlashPrism:false,
     source:source,
     vid:vid,
     playauth:playauth,
     cover:"",
     components:[{type:StaticAdComponent,args:['http://cdnoss.youkouyang.com/cover.png',
     'http://player.alicdn.com']}]                 
};

var player = new Aliplayer(option);

```

### 引用Aliplayer组件库

- 在html文件中引用具体的JS文件

```sh

<script type="text/javascript" src="js/aliplayerComponents.min.js"></script>

```

- 给播放器注入组件

提供了3个参数：

|名称|说明
|-|-
|name|组件名称，可用通过名称得到组件
|type| 组件类型
|args| 组件的参数

```sh

 var option = {
     id: "J_prismPlayer",
     autoplay: true,
     isLive:false,
     playsinline:true,
     width:"100%",
     height:"100%",
     useH5Prism:true, //启用H5播放器
     useFlashPrism:false,
     source:source,
     vid:vid,
     playauth:playauth,
     cover:"",
     components:[{type:AliPlayerComponent.StaticAdComponent,args:['http://cdnoss.youkouyang.com/cover.png',
     'http://player.alicdn.com']},
     notParameComponent,
     {name:'adComponent1',type:notParameComponent}
     ]                 
};

var player = new Aliplayer(option);

```

|名称|说明
|-|-
|name|组件名称，可用通过名称得到组件
|type| 组件类型
|args| 组件的参数

```sh

 var player = new Aliplayer({
    id: "J_prismPlayer",
     autoplay: true,
     isLive:false,
     playsinline:true,
     controlBarVisibility:"click",
     cover:"",
     components:[
     {name:'adComponent',type:StaticAdComponent,args:['http://cdnoss.youkouyang.com/cover.png']},
     notParameComponent,
     {name:'adComponent1',type:notParameComponent}
     ]                 
    });

```

#### 获取组件

提供getComponent方法获取实例组件，参数为组件的名字

```sh

var component = player.getComponent('adComponent');

```

### 安装依赖项

本Demo使用了ES6、webpack、gulp等技术。

 - [Node.js](https://nodejs.org/en/)
 - [Webpack2.0](http://webpack.github.io) 
 - [gulp](https://gulpjs.com)

```sh

$ cd customComponents
$ npm install

```

### 编译

#### 编译压缩版和非压缩版


```sh

$ cd customComponents
$ npm run build

```

#### 编译压缩版

```sh

$ cd customComponents
$ npm run prod

```

#### 编译非压缩版

```sh

$ cd customComponents
$ npm run dev

```

