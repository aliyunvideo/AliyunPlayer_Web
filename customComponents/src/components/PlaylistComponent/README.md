## Playlist component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PlaylistComponent/README.zh_CN.md)

This component adds the button for displaying the playlist and buttons for switching among videos to the control bar of the player and can display a playlist in the player.

### Usage

Reference this component and add the following code to the player configuration:

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

This component contains the following parameter:

> playlist

- `playlist`: The video list. The type is `Array`. It has two properties: `name` (video name) and `source` (video URL).

This component has the following callback events:

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