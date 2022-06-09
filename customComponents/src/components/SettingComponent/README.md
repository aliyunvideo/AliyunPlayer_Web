## Setting component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/playerNextComponent/README.zh_CN.md)

This component adds the `Setting` button to the control bar of the player. You can customize the click event handler for the button and pass the event handler as the component parameter.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'SettingComponent',
  type: AliPlayerComponent.SettingComponent,
  args: [clickHandle]
}]
```

This component contains the following parameter:

> clickHandle

- `clickHandle`: the click event handler for the `Setting` button.

