## Definition component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/QualityComponent/README.zh_CN.md)

This component is used to switch to another definition of a video.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'QualityComponent',
  type: AliPlayerComponent.QualityComponent
}]
```

> You need to add the code for obtaining the current definition to the callback function that is called when the player is created. 

```js
// Register the sourceloaded event of the player to obtain the definition of the current video, obtain the definition component, and call the setCurrentQuality method of the component to set the definition to be used by the player.
player.on('sourceloaded', function(params) {
  var paramData = params.paramData
  var desc = paramData.desc
  var definition = paramData.definition
  // Obtain the definition component and call the setCurrentQuality() method of the component to set the definition to be used by the player. 
  player.getComponent('QualityComponent').setCurrentQuality(desc, definition)
})
```

**After the definition component is added, the definition setting in the player is hidden.**

