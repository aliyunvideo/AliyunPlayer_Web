## 开始广告组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/StartADComponent/README.md)

视频即将开始播放时显示的图片广告组件

### 使用方法

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'StartADComponent',
  type: AliPlayerComponent.StartADComponent,
  args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', 3]
}]
```

该组件接收三个参数:

> coverUrl, adUrl, adDuration

- `coverUrl`, `String` 类型, 广告图片URL
- `adUrl`, `String` 类型, 广告链接
- `adDuration`, `Number` 类型, 广告时长, 单位为秒
