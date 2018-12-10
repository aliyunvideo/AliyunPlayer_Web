import VideoPlayer from './js/videoplayer';
import Header from './js/header';
import Comment from './js/comment';
import Favoriate from './js/favoriate';
import CommentSender from './js/commentsender';
import Loading from './js/loading';
import util from './js/util';
import layout from './js/layout';
require('./css/index.css');
var comment, favoriate, header;
$(()=>{
	var player = new VideoPlayer({
	        id: 'J_prismPlayer',
	        autoplay: true,
	        isLive:true,
          height:"100%",
          width:"100%",
	        playsinline:true,
	        source:"https://player.alicdn.com/resource/player/big_buck_bunny.mp4",
	        useH5Prism:true,
	        useFlashPrism:false,
	        cover: 'http://cdnoss.youkouyang.com/cover.png',
          //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放
          x5_type:'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html
          x5_fullscreen:true,//通过 video 属性 “x5-video-player-fullscreen” 声明视频播放时是否进入到 TBS 的全屏模式，支持的值：true
          skinLayout:[
          {name:"bigPlayButton", align:"blabs", x:"70", y:"150"},
          {name: "H5Loading", align: "cc"},
          {name: "errorDisplay", align: "tlabs", x: 0, y: 0},
          {name: "infoDisplay", align: "cc"}
          ]
        });
  CommentSender.setup();
  comment = new Comment();
  favoriate  = new Favoriate();
  header = new Header();
  header.setup({
    nickName:'小鱼儿',
    avatar:'./images/avatar.jpg',
    likeNum:2346,
    viewerNum:12390
  });

  layout.adjustLayout();
  Loading.hide();
});
