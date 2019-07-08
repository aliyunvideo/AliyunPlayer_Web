## Start ad component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/StartADComponent/README.zh_CN.md)

This component is used to display an image ad when a video is about to be played.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'StartADComponent',
  type: AliPlayerComponent.StartADComponent,
  args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', 3]
}]
```

This component contains the following parameters:

> coverUrl, adUrl, and adDuration

- `coverUrl`: the URL of the image ad. The type is `String`.
- `adUrl`: the URL of the ad page. The type is `String`.
- `adDuration`: the display duration of the ad. Unit: seconds. The type is `Number`.

