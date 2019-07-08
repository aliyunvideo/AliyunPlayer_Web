## Preview component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PreviewVodComponent/README.zh_CN.md)

This component allows a user to preview a video for a period of time. After the preview ends, this component displays the condition for watching the full video.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'PreviewVodComponent',
  type: AliPlayerComponent.PreviewVodComponent,
  /**
   * The preview component contains three parameters: previewDuration, previewEndHtml, and previewBarHtml.
   * previewDuration: the preview duration. Unit: seconds. A value of 0 indicates that the full video can be watched. If the user is a VIP or has purchased the video, this parameter must be set to 0.
   * previewEndHtml: the prompt that appears in the middle of the player after the preview ends. The value can be a DOM string or a number sign (#) followed by the ID of the parent node. The default value is null.
   * previewBarHtml: the prompt that appears in the lower-left corner of the player for displaying the preview duration and the condition for watching the full video. The value can be a DOM string or a number sign (#) followed by the ID of the parent node. Its style can be customized. The default value is null.
   * Tips: To set previewEndHtml and previewBarHtml, you can insert an HTML element into the script tag, such as <script type="text/template" id="endPreviewTemplate"> in the following example.
   * Tips: You can also set previewEndHtml and previewBarHtml to DOM strings. We recommend that you use ES6 template strings for easily inserting DOM strings.
   */
  args: [previewDuration, previewEndHtml, previewBarHtml]
}]
```

This component contains the following parameters:

> previewDuration, previewEndHtml, and previewBarHtml

- `previewDuration`: the preview duration. Unit: seconds. The type is `Number`. A value of 0 indicates that the full video can be watched.
- `previewEndHtml`: Optional. The `DOM` string that appears in the middle of the player after the preview ends. The default value is null. You can use either of the following methods to set `previewEndHtml:`

```js
/**
 * Method 1: Set type to "text/template" and specify an ID in the script tag.
 * Write the HTML element to be inserted into previewEndHtml in the script.
 * Set previewEndHtml to a number sign (#) followed by the script ID.
 */

// HTML
<script type="text/template" id="endPreviewTemplate">
  <div>Element inserted into previewEndHtml</div>
</script>

// Set previewEndHtml to '#endPreviewTemplate' in the parameters of the preview component. 
args: [previewDuration, '#endPreviewTemplate', previewBarHtml]

/**
 * Method 2: Set previewEndHtml to a DOM string.
 */

// Set previewEndHtml to a DOM string by using the ES6 template syntax in the parameters of the preview component. 
args: [previewDuration, `<div>Element inserted into previewEndHtml</div>`, previewBarHtml]
```

- `previewBarHtml`: Optional. The `DOM` string that appears in the lower-left corner of the player. The default value is null. You can set `previewBarHtml` in the same way as setting `previewEndHtml.`

**All custom `DOM` strings support custom events.**

### Component properties and methods

- `closePreviewLayer`: the method of the preview component for closing the prompt that appears in the middle of the player after the preview ends.

