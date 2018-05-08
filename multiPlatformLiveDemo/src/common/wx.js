import util from './util.js'
export default class Wx {
  static ready(callback) {
    if (!util.isWeixin5())
      return;
    util.loadJs([{
      src: 'lib/jweixin-1.0.0.js',
      func: () => {
        wx.config({
          debug: false,
          appId: '',
          timestamp: 1,
          nonceStr: '',
          signature: '',
          jsApiList: []
        });
        wx.ready(function() {
          if (typeof callback === 'function')
            callback();
        });
      }
    }]);
  }

  static initShare(title, videoUrl, desc = '看完这段视频我和我的小伙伴都惊呆了！猛戳播放', imgUrl = 'http://download.qupai.me/qupai_res/wap/images/logo.png', appId = "", link = window.location.href) {
    if (!util.isWeixin5())
      return;
    let hash = window.location.hash,
      href = window.location.href,
      nohash = href.replace(hash, ''),
      url = encodeURIComponent(nohash); //url是编码的no-hash地址
    $.getJSON("http://114.55.136.109:83/wx/signature?callback=?&url=" + url, function(data) {
      let jsonStr = $.parseJSON(data);
      util.loadJs([{
        src: 'lib/jweixin-1.0.0.js',
        func: () => {
          wx.config({
            debug: false,
            appId: appId,
            timestamp: jsonStr.ts,
            nonceStr: jsonStr.noncestr,
            signature: jsonStr.signature,
            jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
          });
          wx.ready(function() {
            wx.onMenuShareTimeline({
              title: desc,
              link: link,
              imgUrl: imgUrl,
              trigger: function(res) {},
              success: function(res) {},
              cancel: function(res) {},
              fail: function(res) {}
            });
            wx.onMenuShareAppMessage({
              title: title,
              link: link,
              imgUrl: imgUrl,
              desc: desc,
              type: 'video',
              dataUrl: videoUrl,
              trigger: function(res) {},
              success: function(res) {},
              cancel: function(res) {},
              fail: function(res) {}
            });
            wx.onMenuShareQQ({
              title: title,
              desc: desc,
              link: link,
              imgUrl: imgUrl,
              success: function() {},
              cancel: function() {}
            });
            wx.onMenuShareWeibo({
              title: title,
              desc: desc,
              link: link,
              imgUrl: imgUrl,
              success: function() {},
              cancel: function() {}
            });

            wx.error(function(res) {
              // alert(res.errMsg);

            });
          });
        }
      }]);
    })
  }

  static setTitle(title) {
    var $body = $('body');
    document.title = title;
    var $iframe = $("<iframe style='display:none;' src='/favicon.ico'></iframe>");
    $iframe.on('load', function() {
      setTimeout(function() {
        $iframe.off('load').remove();
      }, 0);
    }).appendTo($body);
  }
}
