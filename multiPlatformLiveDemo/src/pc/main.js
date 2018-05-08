import header from "./component/header";
import listheader from "./component/listheader";
import LiveList from "./component/livelist";
import chat from "./component/chat";
import service from "../common/service";
import util from "../common/util";

require("./main.scss");


$(() => {
   let search = util.QueryString(window.location.href),
   streamName = 0;
   if(search.key)
   {
      streamName = search.key;
   }
  if ($.os.phone  && !util.isDev())
  {
    util.redirectByDevice();
    return;
  }
   listheader.setup();
   chat.setup({avatar:"http://avatar.test.qupai.me/20160506/b8130ac8-076d-47e4-84fb-4c920fe61807.jpg", nickName:"玲珑"});
   var liveList;
  //静态信息
  service.getLiveInfo(streamName, function(data){//code=200&&data执行
    let liveInfo = data;
    if(data.bgImgUrl){
      $('.content').css('background-image', 'url(' + data.bgImgUrl + ')');
    }
    service.getLiveHistory(streamName,(data)=>{
        let list = data;
        if(liveInfo)
        {
          list.unshift(liveInfo);
        }   
        liveList = new LiveList(list);
      });
  });

})
