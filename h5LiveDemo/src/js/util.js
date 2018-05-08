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
		return document.body.clientHeight || document.documentElement.clientHeight  || window.screen.height || window.innerHeight  ;
	}

	static isX5()
	{
		let agent = navigator.userAgent
		return (/micromessenger/i).test(agent) || (/qqbrowser/i).test(agent);
	}
}