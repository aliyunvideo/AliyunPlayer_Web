## Last position component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/MemoryPlayComponent/README.zh_CN.md)

This component remembers the last playback position of a video. It can notify you of the last playback position so that you can `seek` to this position. Alternatively, this component can automatically seek to the last playback position and start the playback from that position.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'MemoryPlayComponent',
  type: AliPlayerComponent.MemoryPlayComponent,
  /* Set the first parameter to true to enable auto play. The default value is false. */
  args: [true]
}]
```

This component contains the following parameter:

> autoPlay

- `autoPlay`: Optional. Indicates whether to automatically seek to the last playback position and start the playback. The type is `Boolean`.The default value is `false`. You can use this parameter to enable or disable automatic playback.

**Note: The last position component uses `localStorage` to record the playback position. This component does not take effect in browsers that do not support `localStorage`.**

