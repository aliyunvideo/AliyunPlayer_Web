require('./video.scss');

export default class Video {
  constructor(data) {
    if (data.name) {
      $('.video-title h3').html(data.name);
    }

    $('.online span').html(data.OnlineNum);
    this.setupPlayer(data)
  }

  play(data)
  {
    if (data.name) {
      $('.video-title h3').html(data.name);
    }
    if(!this.player || (this.isLiving != (data.liveStatus == 1)))
    {
      if(this.player)
      {
        this.player.dispose();
        $('#J_prismPlayer').empty();
      }
      this.setupPlayer(data);
    }
    else
    {
      this.player.loadByUrl(data.m3u8PlayUrl);
    }
  }


  setupPlayer(data){
    this.isLiving = false;//data.liveStatus == 1;
    let isFlash = Video.isFlash(data.m3u8PlayUrl);
    this.player = new Aliplayer({
    id: "J_prismPlayer",
         autoplay: true,
         isLive:this.isLiving,
         playsinline:true,
         width:"100%",
         height:"407px",
         controlBarVisibility:"always",
         useH5Prism:!isFlash,
         useFlashPrism:isFlash,
         source:data.m3u8PlayUrl,
         cover:data.coverUrl                 
    });
  }



  static isFlash(src)
  {
    if(src.indexOf('.flv')>-1 || src.indexOf('rtmp')>-1)
    {
      return true;
    }

    let video = document.createElement('video');
    var hasVideo = !!(video.canPlayType);
    if(!hasVideo)
    {
      return true;
    }
    if(src.indexOf('.m3u8')>-1 && video.canPlayType('application/x-mpegURL')=="")
    {
      return true;
    }



    return false;
  }

}
    




  
