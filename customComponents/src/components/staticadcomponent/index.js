 const html = require('./index.html');
 require('./index.css');

 const StaticADComponent = Aliplayer.Component({
    init:function(adAddress,toAddress)
    {
      this.adAddress = adAddress;
      this.toAddress = toAddress;
      this.$html = $(html);
    },
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
    play:function(player,e)
    {
       this.$html.hide();
    },
    pause:function(player,e)
    {
       this.$html.show();
    },
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
    ended:function(player,e)
    {
      this.$html.show();
    }
});

export default StaticADComponent;