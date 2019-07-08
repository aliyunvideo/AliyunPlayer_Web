## 暂停播放广告组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PauseADComponent/README.md)

在播放暂停时, 显示在播放器中间的图片广告。

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'PauseADComponent',
  type: AliPlayerComponent.PauseADComponent,
  args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html']
}]
```

该组件接收两个参数: 

> coverUrl, adUrl

- `coverUrl`, `String` 类型, 图片广告组件的图片地址
- `adUrl`, `String` 类型, 图片点击跳转的链接

