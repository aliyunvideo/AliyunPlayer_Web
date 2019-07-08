## 清晰度组件 

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/QualityComponent/README.md)

清晰度组件是用来快速切换视频清晰度的组件

### 使用方法

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'QualityComponent',
  type: AliPlayerComponent.QualityComponent
}]

```

> 为了能够获取当前视频的可选清晰度, 需要在播放器创建完成的回调函数中添加获取清晰度的代码:

```js
// 注册播放器的 sourceloaded, 获取当前播放视频的清晰度, 获取清晰度组件, 并调用组件的setCurrentQuality方法设置播放器清晰度
player.on('sourceloaded', function(params) {
  var paramData = params.paramData
  var desc = paramData.desc
  var definition = paramData.definition
  // 获取清晰度组件并调用清晰度组件的 setCurrentQuality 设置清晰度 
  player.getComponent('QualityComponent').setCurrentQuality(desc, definition)
})
```

**添加清晰度组件之后, 播放器的设置里面的清晰度选项会被隐藏**
