import Video from "../video";
import service from "../../../common/service";
import util from "../../../common/util";
require('./livelistitem.scss');
const html = require('./index.html');

/*export default () => {

};*/
export default class LiveListItem {

  static setup(wrapper, data, playCallback) {
    let $ele = $(html);
    $ele.find('.item-wrapper img').attr('src', data.coverUrl);
    $ele.find('.live-date').text(util.timeFormat(data.createTime));
    if(data.liveStatus != 1)
    {
      $ele.find('.item-wrapper .isLive').removeClass('isLive');
    }
    wrapper.append($ele);
    LiveListItem._bindEvent(wrapper,$ele,data,playCallback);
  }

  static _bindEvent(wrapper, $ele, data, playCallback){
    $ele.click(()=>{
      if(playCallback){
        playCallback(data);
      }
      wrapper.find('.curr-item').removeClass('curr-item');
      $ele.addClass('curr-item');
    });
  }

}
