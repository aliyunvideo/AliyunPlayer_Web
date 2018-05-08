require('./index.css');
export default class VideoPlayer
{
	constructor(props) {
		this.player;
		this.props = props;
		this._setup();
		this._bindEvent();
		this._firstFullscreen = true;
	}

	loadByUrl(url)
	{
		if(this.player)
			this.player.loadByUrl(url);
	}

	dispose()
	{
		if(this.player)
		{
			this.player.dispose();
			Zepto('#'+this.props.id).empty();
		}
	}

    _setup()
	{
		this.player = new Aliplayer(this.props);
	}

	_bindEvent()
	{
		let that = this;
		this.player.on('ready',  (e)=>{
            console.log('ready');
        });

        this.player.on('play',(e)=>{
            console.log('play');

        });

        this.player.on('ended',(e)=>{
            console.log('ended');

            });
        this.player.on('pause',(e)=>{
            console.log('pause');

            });
    
        this.player.on('requestFullScreen', (e)=>{
        	    let video=$(that.player.tag);
        	    video.addClass('center');
                if((/iPhone|iPad|iPod/i).test(navigator.userAgent))
                {
                    $(that.player.el()).removeClass('prism-fullscreen');
                }
        });

        this.player.on('x5cancelFullScreen',(e)=>{
        	let service = that.player.fullscreenService;
        	if(service.getIsFullScreen())
        	{
        		service.cancelFullScreen()
        	}
            $(that.player.el()).removeClass('enter-x5-player');

            var layout = that.player.originalLayout;
            if(layout)
            {
                that.player.tag.style.height = layout.video.height;
            }h
        });

        this.player.on('x5requestFullScreen',(e)=>{
            //调整视频的位置
            $(that.player.el()).addClass('enter-x5-player');
            var screenHeight = document.body.clientHeight*(window.devicePixelRatio||1)+ "px";
            that.player.tag.style.height = screenHeight;
            let video=$(that.player.tag);
            setTimeout(()=>{
                video.removeClass('x5-top-left');
            });
        });
        this.player.on('cancelFullScreen', (e)=>{
        	let video=$(that.player.tag);
            setTimeout(()=>{
                alert(video.length());
               video.removeClass('center');
               video.removeClass('x5-top-left');
            })
        });
        //微信左上角退出按钮触发是，关闭页面
        this.player.tag.addEventListener("x5videoexitfullscreen", ()=>{
            if(WeixinJSBridge)
                WeixinJSBridge.call('closeWindow');
            else
            {
                try
                {
                    window.location.refresh();
                }catch(e)
                {}
            }
        });

		$(document).on('WeixinJSBridgeReady',()=>{ 
		   	let video=$(that.player.el()).find('video')[0];
		    video.play();
		});
	}

	_unbindEvent()
	{
		let that = this;
		this.player.off('ready',function  (e) {
		// 解决ios不自动播放的问题
		if($.os.ios)
		   that._autoPlay();
        console.log('ready');

        });

        this.player.off('play',function  (e) {
            console.log('play');

            });

        this.player.off('ended',function  (e) {
            console.log('ended');

            });
        this.player.off('pause',function  (e) {
            console.log('pause');

            });
	}
}