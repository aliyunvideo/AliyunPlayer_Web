 const html = require('./index.html');
 require('./index.css');

  /**
  * 静态广告组件
  */
 const StaticADComponent = Aliplayer.Component({
    /**
    * 初始函数，在new对象时调用
    *
    * @param {string} adAddress - 广告视频地址
    * @param {string} toAddress - 广告链接地址
    */
    init:function(adAddress,toAddress)
    {
      this.adAddress = adAddress;
      this.toAddress = toAddress;
      this.$html = $(html);
    },

    /**
    * 创建广告Dom元素
    */
    createEl:function(el)
    {
      this.$html.find('.ad').attr('src',this.adAddress);
      var $adWrapper = this.$html.find('.ad-wrapper');
      $adWrapper.attr('href',this.toAddress);
      $adWrapper.click(function(){
        Aliplayer.util.stopPropagation();
      });
      this.$html.find('.close').click(function(){
        this.$html.hide();
      });
      $(el).append(this.$html);
    },
    ready:function(player,e)
    {
    },
    /**
    * 隐藏广告
    */
    play:function(player,e)
    {
       this.$html.hide();
    },
    /**
    * 显示广告
    */
    pause:function(player,e)
    {
       this.$html.show();
    },
    /**
    * 隐藏广告
    */
    playing:function(player,e)
    {
       this.$html.hide();
    },
    waiting:function(player,e)
    {
    },
    timeupdate:function(player,e)
    {
    },
    error:function(player,e)
    {
    },
    /**
    * 显示广告
    */
    ended:function(player,e)
    {
      this.$html.show();
    }
});

export default StaticADComponent;