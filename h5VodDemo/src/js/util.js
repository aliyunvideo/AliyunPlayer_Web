export default class Util
{
	static prefixedEvent(element, type, callback) {
		let pfx = ["webkit", "moz", "MS", "o", ""];
		for (var p = 0; p < pfx.length; p++) {
			if (!pfx[p]) type = type.toLowerCase();
			Util.addEvent(element, pfx[p] + type, callback);
		}
	}

	static addEvent(ele, type, hander) {
		if (ele.addEventListener) {
			ele.addEventListener(type, hander, false);
		}
		if (ele.attachEvent) {
			ele.attachEvent('on' + type, hander);
		}
	}

	static screenHeight()
	{
		return document.documentElement.clientHeight || document.body.clientHeight || window.screen.height || window.innerHeight  ;
	}

	static encodeHtml (s) {
	  let REGX_HTML_ENCODE = /"|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g
	  return (typeof s != "string") ? null :
	  s.replace(REGX_HTML_ENCODE,
	  function($0){
	      var c = $0.charCodeAt(0), r = ["&#"];
	      c = (c == 0x20) ? 0xA0 : c;
	      r.push(c); r.push(";");
	      return r.join("");
	  })
	}
}