import React from 'react';
require('./livelistitem.scss');
export default class LiveListItem extends React.Component
{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.selectedItemCallback(this.props.itemData);
  }

  render(){
    let {coverUrl,description,OnlineNum,createTime, streamName,liveStatus} = this.props.itemData;
    return <li className="live-list-item" onClick={this.handleClick}>
      <div className="list-item-img">
          <img className="img-bg" src={coverUrl}></img>
          { liveStatus==1?
              <img className="img-live" src={require('../../../images/live@3x.png')}></img>
              :
              ""
          }
          <div className={this.props.currentStreanName == streamName?'isPlaying live-playing':'isPlaying live-playing v-hide'}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
      </div>
      <div className="list-item-info" onClick="">
        <p className='description'>{description}</p>
        <div className="live-audience-info">
          <div  className="audience-count-info" >
            <img src={require('../../../images/eye@3x.png')}></img>
            <span>{OnlineNum}</span>
          </div>
          <p className="live-date">{createTime}</p>
        </div>
      </div>
    </li>;
  }
}
