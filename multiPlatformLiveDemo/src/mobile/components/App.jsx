import React from 'react';
import H5video from './h5video';
import ListHeader from './listheader';
import LiveList from './livelist';
import service from  '../../common/service';

require('./App.scss');

export default class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      liveInfo:{},
      liveList:[],
      currentStreanName:""
    };
    this.selectedItemCallback = this.selectedItemCallback.bind(this);
  }

  componentDidMount()
  {
    this._retrieveData(this.props.streamName);
  }

  selectedItemCallback(item){
    this.setState({liveInfo:item,currentStreanName:item.streamName}); 
  }

  _retrieveData(streamName){
    let liveInfo,list;
    service.getLiveInfo(streamName,(data)=>{
      liveInfo = data;
      service.getLiveHistory(streamName,(data)=>{
        list = data;
        if(liveInfo)
        {
          list.unshift(liveInfo);
        }   
        this.setState({liveInfo:liveInfo,liveList:list,currentStreanName:streamName});
      });
     
    });
  }
  render()
  {
    return <div>
      <div className="live-video-container">
        <H5video  controls className="h5video" liveInfo={this.state.liveInfo}></H5video>
      </div>
      <ListHeader onlineCount={this.state.liveInfo.OnlineNum}></ListHeader>

      <LiveList currentStreanName={this.state.currentStreanName} liveList={this.state.liveList} selectedItemCallback={this.selectedItemCallback}></LiveList>

    </div>;
  }
}
