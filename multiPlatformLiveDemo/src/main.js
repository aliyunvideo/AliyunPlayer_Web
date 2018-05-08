import util from './common/util';
import config from './config';
require('zepto');
require('./main.scss');
$(() => {
  util.redirectByDevice();
});
