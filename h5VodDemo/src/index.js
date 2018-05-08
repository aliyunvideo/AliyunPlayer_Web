import VideoPlayer from './js/videoplayer';
import VideoList from './js/videolist';
import Comment from './js/comment';
import Favoriate from './js/favoriate';
import CommentSender from './js/commentsender';
import util from './js/util';

require('./css/index.css');
var comment, favoriate;
$(()=>{
	var player = new VideoPlayer({
	        id: 'J_prismPlayer',
	        autoplay: true,
	        isLive:false,

	        playsinline:true,
	        controlBarVisibility:'always',
	        source:"//common.qupai.me/player/qupai.mp4",
	        useH5Prism:true,
	        useFlashPrism:false,
          x5_video_position:'top',
          //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放
          x5_type:'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html
	        cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
        });
    var dataList = [{
    	url:'https://common.qupai.me/player/qupai.mp4',
    	cover:'images/cover1.png',
    	title:"分享精彩生活"
        },
        {
    	url:'http://player.alicdn.com/video/1.mp4',
    	cover:'images/cover2.png',
    	title:"多力多滋"
        },
        {
    	url:'http://player.alicdn.com/video/11.mp4',
    	cover:'images/cover3.png',
    	title:"马云讲新零售"
        }];
	VideoList.setup('videolist',dataList, player);
  CommentSender.setup();
  var wrapper = $('.comment-list');
  comment = new Comment(wrapper);
  favoriate  = new Favoriate(wrapper);
  $('.comment-textbox').show();

  let adjustLayout = ()=>{
    let offset = $('.ui-tab .ui-tab-nav').offset();
    let remainHeight = util.screenHeight() - offset.top - offset.height - $('.comment-textbox').height();
    $('.ui-tab-content').height(remainHeight);
    $('.comment-list .comment-container').css('max-height',remainHeight);
  };
  adjustLayout();
});
