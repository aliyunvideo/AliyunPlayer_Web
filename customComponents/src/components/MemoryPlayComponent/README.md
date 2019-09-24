## 记忆播放组件

自动记忆用户上一次播放的视频位置, 记忆播放组件分两种, 一种点击播放(会提示用户上次播放的位置, 用户可以点击 `seek`), 另一种是自动播放(自动seek到上次播放位置)

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'MemoryPlayComponent',
  type: AliPlayerComponent.MemoryPlayComponent,
  /* Set the first parameter to true to enable auto play. The default is false. */
  args: [true，getTime,saveTime]
}]
```

该组件接收3个参数:

> autoPlay,getTime,saveTime
**返回的时间的单位都是 秒**

- `autoPlay`: `Boolean`, 可选参数, 默认为 `false`。是否启用自动播放。
- `getTime`: 函数, 获取视频结束时间函数, 可选参数方法。不传则保存到localStorage。
- `saveTime`: 函数, 自定义起播时间函数, 可选参数方法。不传则默认从localStorage获取起播时间。

> `saveTime` 的参数就是一个视频标识对应一个结束时间
- `memoryVideo`: `String`, 必填参数。视频标识。
- `currentTime`: `number`, 必填参数。视频结束时间。

> `getTime` 的参数就是一个视频标识
- `memoryVideo`: `String`, 必填参数。视频标识，可用作查询此视频播放到了哪里。


```js
const saveTime = function (memoryVideo,currentTime) {
	console.log(memoryVideo, currentTime)   
}

const getTime = function (memoryVideo) {
	/* return返回的是自定义起播时间  */
	return 20
}
```

**注意: 记忆播放组件使用 `localStorage` 记录播放位置, 不支持 `localStorage` 的浏览器, 记忆播放组件将不生效**
