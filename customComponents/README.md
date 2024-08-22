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

## Development Guide

### Install dependencies
```sh

$ cd customComponents
$ npm install

```

### Start
```sh

$ npm run dev
# or you may want
$ npm run dev componentsName # componentsName indicates the component name.

```

### Package components

#### Package all components

You can run either of the following commands to package all components. The packaged file is `/dist/aliplayer-components/aliplayercomponents-[version].min.js.`

```sh
$ npm run build
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
- VideoAD: the video ad component.

The packaged file is `/dist/aliplayer-components/aliplayercomponents-[version].min.js` file, which can be referenced in your page.


### Reference the ApsaraVideo Player component library

- Reference the specific JS file in your HTML file.

```sh
<script type="text/javascript" src="path/to/aliplayercomponents-[version].min.js"></script>
```

- Inject a component to the player

The following table lists the parameters for injecting a component.

|Parameter|Description
|-|-
|name|The component name. You can obtain a component by its name.
|type|The component type.
|args|The component parameters.

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

#### Obtain a component

You can use the getComponent method to obtain the instance of a component. The parameter is the component name.

```sh
let component = player.getComponent('BulletScreenComponent');
```
