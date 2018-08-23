 const html = require('./index.html');
 require('./index.css');

export default class StaticADComponent
{
    constructor(adAddress,toAddress) {
      this.adAddress = adAddress;
      this.toAddress = toAddress;
      this.$html = $(html);
    }

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

    ready(player,e)
    {
    }

    play(player,e)
    {
       this.$html.hide();
    }

    pause(player,e)
    {
       this.$html.show();
    }

    playing(player,e)
    {
       this.$html.hide();
    }

    waiting(player,e)
    {
    }

    timeupdate(player,e)
    {
    }

    error(player,e)
    {
    }

    ended(player,e)
    {
      this.$html.show();
    }
}
