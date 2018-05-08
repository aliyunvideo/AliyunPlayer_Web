import React from 'react';
import LiveListItem from '../livelistitem';
require('./livelist.scss');
export default class LiveList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {liveList,currentStreanName,...others} = this.props;
    console.log(liveList);
    return <ul className='live-list-container'>
    {
      liveList.map(item=>{
        return <LiveListItem currentStreanName={currentStreanName} key={item.streamName} itemData={item} {...others}></LiveListItem>
      })
    }
    </ul>;
  }
}
