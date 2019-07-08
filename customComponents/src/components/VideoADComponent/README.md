## Video ad component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/VideoADComponent/README.zh_CN.md)

This component is used to display a video ad when a video is about to be played.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'VideoADComponent',
  type: AliPlayerComponent.VideoADComponent,
  /* The video ad component contains the following parameters: adVideoSource, adLink, adCloseFunction, and closeText.
   * adVideoSource {@String Required. The URL of the video ad. }
   * adLink {@String Required. The URL of the ad page.}
   * adCloseFunction {@Function Optional. The click event handler for the skip ad button. The default action is to skip the ad.}
   * closeText {@String Optional. The text of the skip ad button. The default value is "Skip Ad".}
   */
  args: ['https://player.alicdn.com/ad/citybrain.mp4', 'https://et.aliyun.com/brain/city', videoAdClose, 'Skip Ad']
}]
```

This component contains the following parameters:

> adVideoSource, adLink, adCloseFunction, and closeText

- `adVideoSource`: the URL of the video ad. The type is `String`.
- `adLink`: the URL of the ad page. The type is `String`. 
- `adCloseFunction`: Optional. The click event handler for the skip ad button. If you do not pass this parameter, the video ad is closed by default.
- `closeText`: Optional. The text of the skip ad button. The type is `String`. If you do not pass this parameter, the text is "Skip Ad" by default.

> `adCloseFunction` takes the video ad as the parameter. You can call the methods provided by the video ad. In the following example, a confirmation dialog box is displayed when the skip ad button is clicked.

```js
var adCloseFunction = function (videoAd) {
  /* Register the pause event to pause the ad. */
  videoAd.pauseVideoAd()
  var result = confirm('Become a VIP and skip the ad?')
  if (result) {
    /* Register the skip event to skip the ad. */
    videoAd.closeVideoAd()
  } else {
    /* Register the play event to play the ad. */
    videoAd.playVideoAd()
  }
}
```

### Component properties and methods

- `pauseVideoAd`: pauses the video ad.
- `closeVideoAd`: closes the video ad.
- `playVideoAd`: plays the video ad.

