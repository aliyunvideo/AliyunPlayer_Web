## 快进按钮

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/playerNextComponent/README.md)

在播放器的控制条上添加 `快进按钮` 视频按钮, 按钮的点击事件用户可以自定义并作为组件参数传入

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'FastForwardComponent',
  type: AliPlayerComponent.FastForwardComponent,
  args: [clickHandle]
}]
```

该组件接收一个参数:

> clickHandle

- `clickHandle`, 函数, `快进按钮 ` 按钮的点击事件