import React from 'react';

require('./h5video.scss');

export default class H5Video extends React.Component
{
  constructor(props) {
    super(props);
    this.isLiving = false;
  }

  static defaultProps = {
      id: 'J_prismPlayer',
      autoplay: true,
      isLive:true,
      width:"100%",
      height:"5.6rem",
      playsinline:true,
      controlBarVisibility:'hover',
      source:"",
      useH5Prism:true,
      useFlashPrism:false,
      x5_video_position:'top',
      //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放
      x5_type:'h5', //
      cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
  };


  componentDidUpdate() {
    if(!this.player)
    {
       this.setupPlayer();
    }
    else
    {
      let isLiving = (this.props.liveInfo.liveStatus == 1);
      if(this.isLiving == isLiving)
      {
        this.player.loadByUrl(this.props.liveInfo.m3u8PlayUrl);
      }
      else
      {
        this.player.dispose();
        $('#J_prismPlayer').empty();
        this.setupPlayer();

      }
    }
  }

  componentWillUnmount() {
    if(this.player)
    {
      this.player.dispose();
    }
  }

  setupPlayer()
  {
    var props = {};
    for(var prop in this.props)
    {
      props[prop] = this.props[prop];
    }

    props.source = this.props.liveInfo.m3u8PlayUrl;
    props.isLive = this.props.liveInfo.liveStatus == 1;
    this.isLiving = props.isLive;
    props.cover = this.props.liveInfo.coverUrl;
    this.player = new Aliplayer(props);

    this.player.on('play',()=>{
      console.log('play');
    });
  }

  render(){
    return <div className="prism-player live-video" id="J_prismPlayer">
    </div>;
  }
}
