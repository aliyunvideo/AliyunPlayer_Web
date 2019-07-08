## Scrolling text component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/BulletScreenComponent/README.zh_CN.md)

This component is used to display scrolling text. You to set the text position, color, and font size.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'BulletScreenComponent',
  type: AliPlayerComponent.BulletScreenComponent,
  /** The scrolling text component contains three parameters: text, style, and bulletPosition. 
   * text: the scrolling text.
   * style: the style of the scrolling text.
   * bulletPosition: the position of the scrolling text. Valid values: 'top', 'bottom', and 'random'. The default value is 'random'.
   */
  args: ['Welcome to use Aliplayer', {fontSize: '16px', color: '#00c1de'}, 'random']
}]
```

This component contains the following parameters:

> text, style, and bulletPosition

- `text`: the scrolling text. The type is `String`.
- `style`: the style of the scrolling text, which is similar to `CSS`. The type is `Object`. The properties of `CSS` are named in the camel-case style. Write these properties correctly.
- `bulletPosition`: Optional. The text position. The default value is 'random', which indicates a random position (that is, the position of the scrolling text is random every time it is displayed.) Other valid values include 'top' and 'bottom'.

**Note: To prevent the scrolling text component from being hidden or deleted, the `CSS` properties `display`, `visibility`, and `opacity` of the component are fixed to `block`, `visible`, and `1`, respectively. To change the transparency of the scrolling text component, set `opacity` in the `style` parameter.**

