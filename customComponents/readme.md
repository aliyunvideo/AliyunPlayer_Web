## Custom-component demo of HTML5-based ApsaraVideo Player

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/README.zh_CN.md)

This demo illustrates the custom components of HTML5-based ApsaraVideo Player and can be used as a reference to implement custom components. In this demo, you can find some common custom components, including third-party components.

## [Introduction](https://yq.aliyun.com/articles/626454)

## Examples

- ES6 example

- ApsaraVideo Player component example

## Component list

[Demo](https://player.alicdn.com/aliplayer/presentation/index.html)

### Components of this demo

- [Last position](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/MemoryPlayComponent)
- [Scrolling text](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/BulletScreenComponent)
- [Start ad](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/StartADComponent)
- [Pause ad](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PauseADComponent)
- [Play next](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/playerNextComponent)
- [Playlist](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PlaylistComponent)
- [Rotation and mirroring](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RotateMirrorComponent)
- [Video ad](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/VideoADComponent): On a mobile device, the browser may hijack the playback of the video ad.
- [Danmu](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/AliplayerDanmuComponent): uses the third-party danmu library [CommentCoreLibrary.](https://github.com/jabbany/CommentCoreLibrary/)
- [Preview](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/PreviewVodComponent)
- [Playback speed](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/RateComponent)
- [Definition](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/QualityComponent)
- [Progress marker](https://github.com/aliyunvideo/AliyunPlayer_Web/tree/master/customComponents/src/components/ProgressComponent)

### Others

## Usage

If you need to use only a single component, reference the JS file of the component. To use a component in the ApsaraVideo Player component library, you can reference the AliPlayerComponent.XXX.js file.

### Package components

**In Windows, set the environment variable `NODE_ENV` to a value different from that in `macOS` and `Linux`. Modify the `build_customize` command in `package.json` as follows:**

```
"build_customize": set NODE_ENV=production&&webpack --config webpack.config.customize.js --progress
```

#### Package all components

You can run either of the following commands to package all components. The packaged file is `/disk/aliplayer-components/aliplayercomponents.min.js.`

```sh
$ npm run build 
# Or
$ npm run build all
```

#### Package components as required

To reduce the size of the packaged file, you can package only required components. To do so, run the following command:

```sh
$ npm run build componentsName # componentsName indicates the component name.
```

componentsName indicates the component name. Separate multiple component names with spaces. Example:

```sh
$ npm run build AliplayerDanmu BulletScreen # Package the danmu and scrolling text components only.
```

You can set componentsName to any of the following values:

- AliplayerDanmu: the damu component.
- BulletScreen: the scrolling text component.
- MemoryPlay: the last position component.
- PauseAD: the pause ad component.
- PlayerNext: the play next component.
- Playlist: the playlist component.
- Preview: the preview component.
- RotateMirror: the rotation and mirroring component.
- StartAD: the start ad component.
- Staticad: the static ad component:
- VideoAD: the video ad component.

The packaged file is `/disk/aliplayer-components/aliplayercomponents.min.js` file, which can be referenced in your page.

### Reference a specific component

- Reference the specific JS file in your HTML file.

```sh
<script type="text/javascript" src="js/staticAdComponent.min.js"></script>
```

- Inject a component to the player

```sh
var option = {
     id: "J_prismPlayer",
     autoplay: true,
     isLive:false,
     playsinline:true,
     width:"100%",
     height:"100%",
     useH5Prism:true, // Enable the HTML5 player.
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

### Reference the ApsaraVideo Player component library

- Reference the specific JS file in your HTML file.

```sh
<script type="text/javascript" src="js/aliplayerComponents.min.js"></script>
```

- Inject a component to the player

The following table lists the parameters for injecting a component.

|Parameter|Description
|-|-
|name|The component name. You can obtain a component by its name.
|type|The component type.
|args|The component parameters.

```sh
var option = {
     id: "J_prismPlayer",
     autoplay: true,
     isLive:false,
     playsinline:true,
     width:"100%",
     height:"100%",
     useH5Prism:true, // Enable the HTML5 player.
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

|Parameter|Description
|-|-
|name|The component name. You can obtain a component by its name.
|type|The component type.
|args|The component parameters.

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

#### Obtain a component

You can use the getComponent method to obtain the instance of a component. The parameter is the component name.

```sh
var component = player.getComponent('adComponent');
```

### Install dependencies

This demo uses technologies such as ES6, webpack, and gulp.

- [Node.js](https://nodejs.org/en/)
- [webpack 4.0](http://webpack.github.io)
- [gulp](https://gulpjs.com)

```sh
$ cd customComponents
$ npm install
```

### Compile the code

#### Compile compressed components

```sh
$ cd customComponents
$ npm run prod
```

#### Compile uncompressed components

```sh
$ cd customComponents
$ npm run dev
```

