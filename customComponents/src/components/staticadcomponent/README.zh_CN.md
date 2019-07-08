## 静态广告组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/staticadcomponent/README.md)

图片广告组件, 代码使用 `es5` 编写

### 使用说明

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'StaticADComponent',
  type: AliPlayerComponent.StaticADComponent,
  args: ['adAddress', 'toAddress']
}]
```

该组件接收两个参数: 

> adAddress, toAddress

- `adAddress`, `String` 类型, 广告视频地址
- `toAddress`, `String` 类型, 广告链接地址
