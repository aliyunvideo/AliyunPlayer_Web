export default class Util {
  static flexible(baseWidth) {
    let dpr, rem, scale, clientWidth, clientHeight;
    let docEl = document.documentElement;
    let fontEl = document.createElement('style');
    let metaEl = document.querySelector('meta[name="viewport"]');
    let devicePixelRatio = window.devicePixelRatio;
    scale = 1 / dpr;
    clientWidth = docEl.clientWidth;
    clientHeight = docEl.clientHeight;
    if (!$.os.ios && !$.os.android) {
      clientWidth = clientHeight * (9 / 16);
      dpr = 1;
      docEl.setAttribute('data-dpr', dpr);
      rem = clientWidth / 10;
    } else { // 设置viewport，进行缩放，达到高清效果
      if (!$.os.ios) {
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
          dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
          dpr = 2;
        } else {
          dpr = 1;
        }
      } else {
        dpr = 1;
      }
      scale = 1 / dpr;
      metaEl.setAttribute('content', ',initial-scale = ' + scale + ',maximum-scale = ' + scale + ',minimum-scale = ' + scale + ', user-scalable = no ');
      docEl.setAttribute('data-dpr', dpr);
      let width = docEl.getBoundingClientRect().width;
      if (width / dpr > 540) {
        width = 540 * dpr;
      }
      rem = width / 10;
    }
    // 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
    window.dpr = dpr;
    window.rem = rem;
  }

  static loadJs(srcs, func) {
    if (!$.isArray(srcs)) {
      srcs = [srcs];
    }
    var length = srcs.length;
    var oHead = document.getElementsByTagName('HEAD').item(0);
    for (var i = 0; i < length; i++) {
      var oScript = document.createElement("script");
      oScript.type = "text/javascript";
      var item = srcs[i];
      oScript.src = item.src ? item.src : item;
      if (item.func) {
        oScript.onload = function() {
          item.func();
        }
      }
      oHead.appendChild(oScript);
    }
  }

  static isWeixin5() {
    let sUserAgent = window.navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf("micromessenger") >= 0) {
      return true;
    }
    return false;
  }

  static isQQ() {
    let sUserAgent = window.navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf("qq") >= 0) {
      return true;
    }
    return false;
  }

  static isWeibo() {
    let sUserAgent = window.navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf("weibo") >= 0) {
      return true;
    }
    return false;
  }

  static isAndroid() {
    let sUserAgent = window.navigator.userAgent;
    if (sUserAgent.indexOf("Android") >= 0) {
      return true;
    }
    return false;
  }

  static isIphone() {
    let sUserAgent = window.navigator.userAgent;
    if (sUserAgent.indexOf("iPhone") >= 0 || sUserAgent.indexOf("iPad") >= 0) {
      return true;
    }
    return false;
  }

  static isDt() {
    let sUserAgent = window.navigator.userAgent;
    if (sUserAgent.indexOf("DingTalk") >= 0) {
      return true;
    }
    return false;
  }

  static timeFormat(timestamp){
    let date = new Date(timestamp);
    let t = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    return t
  }

  static formatDateToDesc(time) {
    let now = new Date(),
      nowTime = now.getTime(),
      duration = nowTime - time,
      seconds = duration / 1000,
      minutes = duration / (1000 * 60),
      hours = duration / (1000 * 60 * 60),
      days = duration / (1000 * 60 * 60 * 24),
      mouths = duration / (1000 * 60 * 60 * 24 * 30);
    if (mouths > 1) {
      let createTime = new Date();
      createTime.setTime(time);
      return createTime.getFullYear() + "-" + (createTime.getMonth() + 1) + "-" + createTime.getDate();
    }
    if (days > 1) {
      return days.toFixed(0) + "天前";
    }
    if (hours > 1) {
      return hours.toFixed(0) + "小时前";
    }
    if (minutes > 1) {
      return minutes.toFixed(0) + "分钟前";
    }
    if (seconds > 1) {
      return seconds.toFixed(0) + "秒前";
    }
    return "刚刚";
  }

  static noop() {

  }

  static QueryString(url) {
    var a, arr, b, i, search;
    url = decodeURIComponent(url);
    arr = url.split('?');
    if (arr.length !== 2) {
      return {};
    }
    search = arr[1];
    a = search.split('&');
    if (!a) {
      return {};
    }
    b = {};
    i = 0;
    $(a).each(function() {
      var p;
      p = a[i].split('=');
      if (p.length !== 2) {
        i++;
        return;
      }
      b[p[0]] = p[1].replace(/\+/g, " ");
      i++;
    });
    return b;
  }

  static getDateRange(start, end) {
    let rangeTime = end - start,
      leave1, leave2, leave3;

    let days = Math.floor(rangeTime / (24 * 3600 * 1000));

    leave1 = days === 0 ? rangeTime : rangeTime % (24 * 3600 * 1000);
    let hours = Math.floor(leave1 / (3600 * 1000));

    leave2 = hours === 0 ? leave1 : leave1 % (3600 * 1000);
    let minutes = Math.floor(leave2 / (60 * 1000));

    leave3 = minutes === 0 ? leave2 : leave2 % (60 * 1000);
    let seconds = Math.round(leave3 / 1000);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  static dateFormat(date, format) {
    let o = {

      "M+": date.getMonth() + 1,

      "d+": date.getDate(),

      "h+": date.getHours(),

      "m+": date.getMinutes(),

      "s+": date.getSeconds(),

      "q+": Math.floor((date.getMonth() + 3) / 3),

      "S": date.getMilliseconds()

    }

    if (/(y+)/.test(format)) {

      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

    }

    for (var k in o) {

      if (new RegExp("(" + k + ")").test(format)) {

        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

      }

    }
    return format;
  }

  static S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  static NewGuid() {
    return (Util.S4() + Util.S4() + "-" + Util.S4() + "-" + Util.S4() + "-" + Util.S4() + "-" + Util.S4() + Util.S4() + Util.S4());
  }

  static setCookie(key, value, timeSpan) {
    let str = key + "=" + escape(value);
    if (timeSpan) {
      let exp = new Date();
      exp.setTime(exp.getTime() + timeSpan * 1);
      str = str + ";expires=" + exp.toGMTString();
    }
    document.cookie = str;
  }

  static getCookie(key) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }

  static deleteCookie(key) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = Util.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }

  // static getUserIdentifierId() {
  //   let userIdentifierId = Util.getCookie('dqUserIdentifierId');
  //   if (!userIdentifierId) {
  //     userIdentifierId = Util.NewGuid();
  //     Util.setCookie('dqUserIdentifierId', userIdentifierId);
  //   }
  //   return userIdentifierId;
  // }

  static isDev()
  {
    let search = Util.QueryString(window.location.href);
    return search.env == 'dev';
  }

  static redirectByDevice() {
    let search = Util.QueryString(window.location.href);
    let key = 0;
    if (!search || !search.key) {
      key = search.key;
    }

    let url = window.location.href;
    if (!!$.os.phone) {
      if (url.indexOf('mobile.html')<0) {
        window.location.href = "/demo/live/mobile.html?" + "key=" + key;
      }
    } else {
      if (url.indexOf('pc.html')<0) {
         window.location.href = "/demo/live/pc.html?" + "key=" + key;
      }
    }
  }

}
