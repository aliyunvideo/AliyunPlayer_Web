## Pause ad component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PauseADComponent/README.md)

This component is used to display an image ad in the middle of the player when a video is paused.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'PauseADComponent',
  type: AliPlayerComponent.PauseADComponent,
  args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html']
}]
```

This component contains the following parameters:

> coverUrl and adUrl

- `coverUrl`: the URL of the image ad. The type is `String`.
- `adUrl`: the URL of the ad page. The type is `String`.

