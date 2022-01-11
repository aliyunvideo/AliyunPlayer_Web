## Playlist component

Other Languages: [简体中文](https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/src/components/PlaylistComponent/README.zh_CN.md)

This component adds the button for displaying the series btn.

### Usage

Reference this component and add the following code to the player configuration:
<div id="play-series"></div>

```js
components: [{
  name: 'PlaySeriesListComponent',
  type: AliPlayerComponent.PlaySeriesListComponent,
  args: ['play-series']
}]
```

This component contains the following parameter:

> el

- `el`: The video list. The type is `String`.
