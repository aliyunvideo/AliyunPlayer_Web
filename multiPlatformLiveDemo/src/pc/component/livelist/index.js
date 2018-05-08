import Video from "../video";
import service from "../../../common/service";
import util from "../../../common/util";
import LiveListItem from "../livelistitem";
require('./livelist.scss');

/*export default () => {

};*/
export default class LiveList {

  constructor(dataList){
    let wrapper = $('.live-list-area .history-lists');
    let length = dataList.length;
    for(let i=0;i<length;i++)
    {
      if(i==0)
      {
        this.video = new Video(dataList[i]);
      }
      LiveListItem.setup(wrapper,dataList[i],(item)=>{
        this.video.play(item);
      })
    }
    let $items =wrapper.find('.live-list-item');
    if($items.length>0)
    {
      $($items[0]).addClass('curr-item');
    }
  }
}
