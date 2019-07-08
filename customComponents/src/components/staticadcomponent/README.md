## Static ad component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/staticadcomponent/README.zh_CN.md)

This component is used to display an image ad. The code is written in `ES5`.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'StaticADComponent',
  type: AliPlayerComponent.StaticADComponent,
  args: ['adAddress', 'toAddress']
}]
```

This component contains the following parameters:

> adAddress and toAddress

- `adAddress`: the URL of the image ad. The type is `String`.
- `toAddress`: the URL of the ad page. The type is `String`.

