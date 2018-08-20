 const html = require('./index.html');
 require('./index.css');

/**
* 静态广告组件
*/
export default class StaticADComponent
{
    /**
    * 构造函数，在new对象时调用
    *
    * @param {string} adAddress - 广告视频地址
    * @param {string} toAddress - 广告链接地址
    */
    constructor(adAddress,toAddress) {
      this.adAddress = adAddress;
      this.toAddress = toAddress;
      this.$html = $(html);
    }
    
    /**
    * 创建广告Dom元素
    */
    createEl(el)
    {
      this.$html.find('.ad').attr('src',this.adAddress);
      this.$html.attr('href',this.toAddress);
      let $adWrapper = this.$html.find('.ad-wrapper');
      $adWrapper.attr('href',this.toAddress);
      $adWrapper.click(()=>{
        Aliplayer.util.stopPropagation();
      });
      this.$html.find('.close').click(()=>{
        this.$html.hide();
      });
      $(el).append(this.$html);
    }
    
    /**
    * 隐藏广告
    */
    play(player,e)
    {
       this.$html.hide();
    }
    
    /**
    * 显示广告
    */
    pause(player,e)
    {
       this.$html.show();
    }

    /**
    * 隐藏广告
    */
    playing(player,e)
    {
       this.$html.hide();
    }
    
    /**
    * 显示广告
    */
    ended(player,e)
    {
      this.$html.show();
    }
}
