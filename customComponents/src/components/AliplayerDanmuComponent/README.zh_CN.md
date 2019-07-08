## 弹幕组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/AliplayerDanmuComponent/README.md)

集成了 `CommentCoreLibrary` 弹幕库, 更多文档请查看 [CommentCoreLibrary文档](https://github.com/jabbany/CommentCoreLibrary/)

在控制条上增加了弹幕关闭和开启按钮, 以及发送弹幕的输入框, 和发送弹幕的按钮

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'AliplayerDanmuComponent',
  type: AliPlayerComponent.AliplayerDanmuComponent,
  args: [danmukuList]
}]
```

该组件接收一个参数 `danmukuList` 数组形式的弹幕列表, 每一个数组元素即一个弹幕对象, 弹幕对象属性参考[CommentObject 弹幕对象](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentObject.md), 可根据文档添加任意属性来满足自己的需求, 示例如下:

```js
// 弹幕对象的属性均来自, CommentCoreLibrary 的 CommentObject 对象可查看文档
[{
  "mode": 1,            // mode 表示弹幕的类型，参考 弹幕类型 https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentTypes.md
  "text": "test",       // text 表示弹幕的文字内容。注意：在创造弹幕对象后，对 text 的更改将无意义。
  "stime": 1000,        // stime 表示弹幕相对于视频位置的开始时间（ms），0即在视频开始立即出现
  "size": 25,           // 弹幕的文字大小
  "color": 0xffffff     // 文字颜色
}]
```

### 接口属性说明

> 调用 `player.getComponent(componentName)` 之后会获取到组件对象, 就可以使用组件的方法

#### 属性

弹幕组件拥有 `CM` 属性, 该属性即弹幕管理器 `CommentManager` 实例, CommentManager 属性方法请参考[CommentManager 弹幕管理器](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentManager.md)

#### 方法

弹幕组件有如下方法:

- `send(data:ICommentData)` 直接发送一条实时弹幕, 实质上调用了 `CM` 的 `send` 方法, 参考[文档](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentManager.md#senddataicommentdata)
- `insert(data:ICommentData)`  把弹幕插入弹幕列表（时间轴）。插入会动态调整目前的位置。实质上调用了 `CM` 的 `insert` 方法, 参考[文档](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentManager.md#insertdataicommentdata)
