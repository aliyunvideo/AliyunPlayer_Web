## 播放下一个视频组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/playerNextComponent/README.md)

在播放器的控制条上添加 `播放下一个` 视频按钮, 按钮的点击事件用户可以自定义并作为组件参数传入

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'playerNextComponent',
  type: AliPlayerComponent.playerNextComponent,
  args: [clickHandle]
}]
```

该组件接收一个参数:

> clickHandle

- `clickHandle`, 函数, `播放下一个 ` 按钮的点击事件