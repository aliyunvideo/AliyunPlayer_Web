## Aliplayer H5播放器的自定义组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/README.md)

本项目包含Aliplayer H5播放器的自定义组件，可以作为自定义组件如何实现的参考，在这里也可以找到一些常用的自定义组件，包含第三方实现的。

## [介绍文章](https://yq.aliyun.com/articles/626454)

## 例子

- ES6例子

- Aliplayer.Component的例子

##  插件列表

[演示地址](https://player.alicdn.com/aliplayer/presentation/index.html)

### 本项目插件

- [记忆播放](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/MemoryPlayComponent)
- [跑马灯](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/BulletScreenComponent)
- [开始广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/StartADComponent)
- [暂停广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PauseADComponent)
- [播放下一个](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/playerNextComponent)
- [播放列表](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PlaylistComponent)
- [旋转和镜像](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RotateMirrorComponent)
- [视频广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/VideoADComponent) 移动端可能视频会被浏览器劫持播放
- [弹幕](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/AliplayerDanmuComponent) 使用了第三方的弹幕库[CommentCoreLibrary](https://github.com/jabbany/CommentCoreLibrary/)
- [试看](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PreviewVodComponent)
- [倍速播放](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RateComponent)
- [清晰度](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/QualityComponent)
- [进度打点](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/ProgressComponent)
- [字幕组件](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/CaptionComponent)
- [音轨组件](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/TrackComponent)
- [多视频广告](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/ManyVideoADComponent)


## 开发指南
### 安装依赖
**请使用 Node.js 20+**
```sh

$ cd customComponents
$ npm install

```

### 启动项目
```sh

$ npm run dev
# 访问：http://localhost:9000

```


### 如何打包


#### 打包全部组件

下面的两个指令中的任意一个都可以打包全部播放器组件, 打包之后的文件是 `/dist/aliplayer-components/aliplayercomponents-[version].min.js` 

```sh
$ npm run build
```

#### 自定义打包组件

为了减少体积, 用户可以自己选择需要打包的组件, 只要执行一下命令

```sh
$ npm run build componentsName # componentsName 是组件名称
```

componentsName 是组件的名称, 多个组件名称以空格隔开, 例如

```sh
$ npm run build AliplayerDanmu BulletScreen # 打包弹幕插件和跑马灯插件
```

componentsName 可选的值有:

- AliplayerDanmu 弹幕组件
- BulletScreen 跑马灯组件  
- MemoryPlay 记忆播放组件
- PauseAD 暂停广告组件 
- PlayerNext 播放下一个视频组件
- Playlist 播放列表组件 
- Preview 试看组件
- RotateMirror 旋转镜像组件
- StartAD 开始广告组件
- VideoAD 视频广告组件
- Caption字幕组件
- Track音轨组件
- ManyVideoAD多视频广告组件

打包之后的文件在是 `/dist/aliplayer-components/aliplayercomponents-[version].min.js` , 引用到用户的页面中即可


### 引用Aliplayer组件库

- 在html文件中引用具体的JS文件

```sh

<script type="text/javascript" src="path/to/aliplayercomponents-[version].min.js"></script>

```

- 给播放器注入组件

每个组件配置项有3个参数：

|名称|说明
|-|-
|name|组件名称，可用通过名称得到组件
|type| 组件类型
|args| 组件的参数

```sh

 let option = {
     id: "J_prismPlayer",
     autoplay: true,
     width:"100%",
     height:"100%",
     source:source,
     components:[
        {
            name: 'BulletScreenComponent',
            type: AliPlayerComponent.BulletScreenComponent,
            args: ['Welcome to use Aliplayer', {fontSize: '16px', color: '#00c1de'}, 'random']
        }
     ]                 
    };

 let player = new Aliplayer(option);
```



#### 获取组件

提供getComponent方法获取实例组件，参数为组件的名字

```sh

let component = player.getComponent('BulletScreenComponent');

```

