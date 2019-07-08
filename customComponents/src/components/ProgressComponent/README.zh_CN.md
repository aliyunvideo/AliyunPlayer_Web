## 视频打点组件 

其他语言: [Language](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/ProgressComponent/README.md)

该组件是对视频的关键点进行打点, 鼠标移动到关键点时能够查看当前用户设置的图片

### 使用说明

引用当前组件, 播放器配置中添加如下代码:

```js
// progressMarkers 即播放器打点设置
progressMarkers:[{
  offset: 30,
  isCustomized:true,
  coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/9A3F562E595E4764AD1DD546FA52C6E5-6-2.png',
  title: 'test title',
  describe: 'test string',
}, {
  offset:50,
  isCustomized:true,
  coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/1E7F402241CD4C0F94AD2BBB5CCC3EC7-6-2.png',
  title: 'test title',
  describe: 'test string',
}, {
  offset:150,
  isCustomized:true,
  coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
  title: 'test title',
  describe: 'test string',
}, {
  offset:120,
  isCustomized:true,
  coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
  title: 'test title',
  describe: 'test string',
}],
components: [{
  name: 'ProgressComponent',
  type: AliPlayerComponent.ProgressComponent
}]
```

`progressMarkers` 中数据项的属性 `title`: 打点组件的标题, `coverUrl`: 打点组件图片地址, `describe`: 打点组件描述
