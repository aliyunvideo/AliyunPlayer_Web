## 视频列表组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PlaylistComponent/README.md)

在播放器控制条上增加选集。

### 使用说明

引入当前组件, 播放器配置中添加如下代码:
<div id="play-series"></div>

```js
components: [{
  name: 'PlaySeriesListComponent',
  type: AliPlayerComponent.PlaySeriesListComponent,
  args: ['play-series‘]
}]
```

该组件接收一个参数:

> el

- `el`, `String` 类型, element id
