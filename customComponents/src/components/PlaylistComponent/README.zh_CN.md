## 视频列表组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PlaylistComponent/README.md)

在播放器控制条上增加视频列表, 视频切换的按钮, 并在播放器上显示视频列表。

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'PlaylistComponent',
  type: AliPlayerComponent.PlaylistComponent,
  args: [[{
    name: 'Alibaba Cloud ApsaraVideo',
    source: '//player.alicdn.com/video/editor.mp4'
  }, {
    name: 'Smart Video Demo',
    source: '//player.alicdn.com/resource/player/qupai.mp4'
  }, {
    name: 'Computing Conference',
    source: 'http://player.pier39.cn/video/yunxi.mp4'
  }, {
    name: 'ApsaraVideo Introduction',
    source: 'https://player.alicdn.com/video/apsaravideo4k.mp4'
  }]]
}]
```

该组件接收一个参数:

> playlist

- `playlist`, `Array` 类型, 播放列表数组, 数组元素拥有两个属性: `name`(视频名称), `source`(视频地址)

该组件提供四个回调事件:

```js
player.on('plugin-playlist-click-video', (event) => {
  // click on VideoItem in list
  console.log("click Item", event.paramData.currentIndex, event.paramData.clickedIndex); 
})
player.on('plugin-playlist-click-prev', (event) => {
  // click on 'Prev' button
  console.log("click Prev", event.paramData.currentIndex); 
})
player.on('plugin-playlist-click-next', (event) => {
  // click on 'Next' button
  console.log("click Next", event.paramData.currentIndex); 
})
player.on('plugin-playlist-change', (event) => {
  // after click, player starts loading a new video
  console.log("video change", event.paramData.currentIndex); 
})
```