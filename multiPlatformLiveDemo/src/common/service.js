import Request from './request';
import util from './util';

const mockData= [{
      streamName: 0,
      name: '视频AI',
      coverUrl: 'http://player.alicdn.com/cover/cover3.png',
      m3u8PlayUrl: 'http://common.qupai.me/player/qupai.mp4 ',
      description: '视频AI',
      OnlineNum: 80,
      liveStatus:1, //1直播 2点播
      createTime: '2019-9-8'
    },{
        streamName: 1,
        name: '多乐多滋',
        coverUrl: 'http://player.alicdn.com/cover/cover2.png',
        m3u8PlayUrl: 'http://player.alicdn.com/video/1.mp4',
        description: '多乐多滋',
        OnlineNum: 12,
        liveStatus:2, //1直播 2点播
        createTime: '2011-9-8'
      }, {
        streamName: 2,
        name: '8秒的旅行',
        coverUrl: 'http://player.alicdn.com/cover/cover1.png',
        m3u8PlayUrl: 'http://common.qupai.me/player/qupai.mp4',
        description: '现在开始8秒的旅行',
        OnlineNum: 23,
        liveStatus:2, //1直播 2点播
        createTime: '2017-9-8'
      },{
        streamName: 3,
        name: '多乐多滋',
        coverUrl: 'http://player.alicdn.com/cover/cover2.png',
        m3u8PlayUrl: 'http://player.alicdn.com/video/1.mp4',
        description: '多乐多滋',
        OnlineNum: 2334,
        liveStatus:2, //1直播 2点播
        createTime: '2012-9-8'
      }, {
        streamName: 4,
        name: '8秒的旅行',
        coverUrl: 'http://player.alicdn.com/cover/cover1.png',
        m3u8PlayUrl: 'http://common.qupai.me/player/qupai.mp4',
        description: '现在开始8秒的旅行',
        OnlineNum: 6665,
        liveStatus:2, //1直播 2点播
        createTime: '2016-9-8'
      }];

export default class Service {

  static getStreamName() {
    let url = window.location.href;
    let kvs = util.QueryString(url);
    return kvs.streamName;
  }

  static getLiveInfo(streamName=0, callback) {
    // let params = {
    //   action: 'GET /live/info',
    //   streamName: streamName
    // }
    // Request.request(params, {success: function(d){
    //   if(d.code == 200 && d.data){
    //     callback(d.data);
    //   }
    // }});
    callback(mockData[streamName]);
    /*option.success = (data) => {

    }*/
  }

  static getLiveHistory(streamName, callback) {
    // let params = {
    //   action: 'GET /live/history',
    //   streamName: streamName,
    // }
    // Request.request(params, {success: function(){
    //   if(d.code == 200 && d.data){
    //     callback(d.data);
    //   }
    // }});

      let data1 = mockData[1],
      data2 = mockData[2];
      if(streamName==1)
      {
        data1 = mockData[0];
      }
      else if(streamName==2)
      {
        data2 = mockData[0];
      }
      callback([data1, data2]);
  }

}
