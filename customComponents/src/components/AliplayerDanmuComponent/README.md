## Danmu component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/AliplayerDanmuComponent/README.zh_CN.md)

Danmu, also known as bullet comment, is a feature that enables comments of viewers to fly across a video when the video is being played. This component integrates `CommentCoreLibrary` to provide the danmu feature. For more information, see the [CommentCoreLibrary documentation.](https://github.com/jabbany/CommentCoreLibrary/)

This component adds a button for enabling or disabling the damu feature, a text box for entering comments, and a button for sending comments to the control bar of the player.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'AliplayerDanmuComponent',
  type: AliPlayerComponent.AliplayerDanmuComponent,
  args: [danmukuList]
}]
```

This component contains the `danmukuList` parameter, which specifies an array of comment objects. For more information about properties of the comment object, see [CommentObject](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentObject.md). You can add any properties as required by referring to the description about CommentObject. The following is an example:

```js
// All properties of the comment object are from the CommentObject object in CommentCoreLibrary. For more information, see the CommentObject document.
[{
  "mode": 1,            // The type of the comment. For more information, visit https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentTypes.md.
  "text": "test",       // The text of the comment. Note: After a comment object is created, any modification to its text does not take effect.
  "stime": 1000,        // The time when the comment is displayed in the video. Unit: milliseconds. A value of 0 indicates that the comment immediately appears when the playback starts.
  "size": 25,           // The font size of the comment.
  "color": 0xffffff     // The color of the text.
}]
```

### Component properties and methods

> After calling `player.getComponent(componentName)`, you can obtain the component object and use the properties and methods of the component.

#### Properties

The danmu component has the `CM` property, which is a `CommentManager` instance. For more information about the properties and methods of CommentManager, see [CommentManager.](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentManager.md)

#### Methods

The danmu component provides the following methods:

- `send(data:ICommentData)`: sends a comment in real time. By calling this method, you essentially call the `send` method of `CM`. For more information, see [this document.](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentManager.md#senddataicommentdata)
- `insert(data:ICommentData)`: inserts a comment into the comment list (timeline). When a comment is inserted, the system automatically sets the time when the comment is displayed. By calling this method, you essentially call the `insert` method of `CM`. For more information, see [this document.](https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/CommentManager.md#insertdataicommentdata)

