export function parseDom (html) {
  let ele = document.createElement('div')
  ele.innerHTML = html
  return ele.childNodes[0]
}

export function cookieSet (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + escape(cvalue) + '; ' + expires;
};

export function isElement(ele) {
  return ele instanceof Element && ele.nodeType === Node.ELEMENT_NODE
}
