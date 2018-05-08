import React from 'react';
require('./listheader.scss');

export default class ListHeader extends React.Component
{
  constructor(props) {
    super(props);
  }

  static defaultProps = {
     onlineCount:0
  };

  static propTypes = {
     onlineCount:React.PropTypes.number
  };

  render(){
    return <section className='list-header'>
      <span className="title">直播历史</span>
      <a className="code-view" href="https://github.com/alilmq/livedemo" target="_blank">github代码</a>
      <div className="online-info">在线：{this.props.onlineCount}人</div>
    </section>;
  }
}
