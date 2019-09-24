## 字幕组件

字幕组件是用来快速切换字幕是哪国语言的组件

### 使用方法

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  source: 'https://vod.olympicchannel.com/NBCR_Production_-_OCS/231/1016/GEPH-ONTHERECS02E012C-_E17101101_master.m3u8',
  name: 'CaptionComponent',
  type: AliPlayerComponent.CaptionComponent
}]
```

**添加字幕组件之后, 播放器的设置里面的字幕选项会被隐藏**
