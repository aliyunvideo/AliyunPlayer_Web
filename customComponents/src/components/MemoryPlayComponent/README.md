## 记忆播放组件

自动记忆用户上一次播放的视频位置, 记忆播放组件分两种, 一种点击播放(会提示用户上次播放的位置, 用户可以点击 `seek`), 另一种是自动播放(自动seek到上次播放位置)

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'MemoryPlayComponent',
  type: AliPlayerComponent.MemoryPlayComponent,
  /* Set the first parameter to true to enable auto play. The default is false. */
  args: [true]
}]
```

该组件接收一个参数:

> autoPlay

- `autoPlay`: `Boolean`, 可选参数, 默认为 `false`。是否启用自动播放。

**注意: 记忆播放组件使用 `localStorage` 记录播放位置, 不支持 `localStorage` 的浏览器, 记忆播放组件将不生效**
