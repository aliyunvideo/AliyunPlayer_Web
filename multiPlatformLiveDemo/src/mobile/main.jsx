import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import util from '../common/util';

require('./main.scss');
$(()=>{
  if (!$.os.phone && !util.isDev())
  {
    util.redirectByDevice();
    return;
  }
  let search = util.QueryString(window.location.href);
  if (!search && search.key) {
    console.log('params isnt exist!');
    return;
  }
  let element = (
    <App streamName={search.key}>
    </App>
  );
  ReactDOM.render(
  element,
  document.body.appendChild(document.createElement('div'))
  );

});
