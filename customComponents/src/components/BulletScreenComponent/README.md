## 跑马灯组件

主要用于一些滚动文字, 可以自定义出现的位置, 文字颜色和字体大小。

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'BulletScreenComponent',
  type: AliPlayerComponent.BulletScreenComponent,
  /** Descriptions of the scrolling text component parameters: text, style, bulletPosition 
   * text: The scrolling text
   * style: The style of the scrolling text
   * bulletPosition: The position of the scrolling text. Valid values: 'top', 'bottom', and 'random'. The default is 'random'.
   */
  args: ['Welcome to use Aliplayer', {fontSize: '16px', color: '#00c1de'}, 'random']
}]
```

该组件接收三个参数:

> text, style, bulletPosition

- `text`, `String` 类型, 需要显示的文字
- `style`, `Object` 类型, 类似 `CSS` 的写法, `CSS` 属性名用驼峰式的写法
- `bulletPosition`, 可选参数, 默认为 'random': 随机位置(位置滚动一次后会随机改变); 另外可以设置成 'top'(顶部) 或 'bottom'(底部)

**注意: 为了防止跑马灯组件被隐藏或者删除, 跑马灯的 `CSS` 属性 `display, visibility, opacity` 分别被固定设置成 `block, visible, 1`。如果想设置跑马灯的透明度, 请设置组件参数 `style` 中的 `opacity`**
