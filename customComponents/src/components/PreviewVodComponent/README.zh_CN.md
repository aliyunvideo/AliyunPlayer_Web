## 试看组件

其他语言: [English](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PreviewVodComponent/README.md)

用于用户试看, 试看结束后提示用户, 观看完整版的条件

### 使用说明

引入当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'PreviewVodComponent',
  type: AliPlayerComponent.PreviewVodComponent,
  /**
   * 试看组件共有三个参数: previewDuration, previewEndHtml, previewBarHtml
   * previewDuration: 试看时长, 单位为秒, 如果不需要开启试看的话, 设置为0, 当开启会员或购买之后设置为0!
   * previewEndHtml: 试看结束之后, 出现在播放器中间的 Dom 字符串或者父节点的 '#' + id, 默认为 null
   * previewBarHtml: 播放器左下角, 提示试看时长之后的 Dom 字符串或者父节点的 '#' + id, 同样可自定义样式, 默认为 null
   * tips: previewEndHtml, previewBarHtml 可以像例子中的那样, <script type="text/template" id="endPreviewTemplate"> 在 script 标签中插入html
   * tips: previewEndHtml, previewBarHtml 也可以直接使用Dom字符串, 推荐使用 es6 的模板字符串可以很方便地插入Dom字符串
   */
  args: [previewDuration, previewEndHtml, previewBarHtml]
}]
```

该组件接收三个参数:

> previewDuration, previewEndHtml, previewBarHtml

- `previewDuration`, `Number` 类型, 试看时长(单位为秒, 设置为 0 表示可以完整观看)
- `previewEndHtml`, 试看结束后显示在播放器中间的 `DOM` 字符串, 可选参数, 默认为 null, 可以两种方式设置 `previewEndHtml`

```js
/**
 * 方式一, script 标签设置 type="text/template", 并设置一个id
 * 在 script 中写入需要插入到 previewEndHtml 的 html
 * previewEndHtml 传入 script 的 id
 */

// html
<script type="text/template" id="endPreviewTemplate">
  <div>previewEndHtml 插入的元素</div>
</script>

// 试看组件参数配置, previewEndHtml 传入 '#endPreviewTemplate'
args: [previewDuration, '#endPreviewTemplate', previewBarHtml]

/**
 * 方式二, 直接传入 DOM 字符串
 */

// 试看组件参数配置, 使用 es6 模板语法, 传入字符串
args: [previewDuration, `<div>previewEndHtml 插入的元素</div>`, previewBarHtml]
```

- `previewBarHtml`, 显示在播放器左下角的 `DOM` 字符串, 可选参数, 默认为 null, 和 `previewEndHtml` 的设置一样有两种方式设置 `previewBarHtml`

**自定义的 `DOM` 字符串都可以添加自定义事件**

### 接口属性说明

- `closePreviewLayer` 试看结束之后关闭播放器中间的提示信息的试看组件方法  
