import util from '../util';
import Event from '../events';
require('./index.css');
const html = require('./index.html');

export default class Favoriate {
	constructor(wrapper, images = ['xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png']) {
		this.animateContainer = $(html);
		wrapper.append(this.animateContainer);
		this.imgNames = images;
		this.index = 0;
		let that = this;
		Event.on(Event.EventConstant.Favoriation_Sended, ()=>{
			that.favoriate();
		})
	}

	favoriate() {
		let length = this.imgNames.length;
		this.index = (this.index < length) ? this.index : 0;
		name = this.imgNames[this.index];
		let $img = $(`<img src="./images/${name}" class="favorite-animation">`);
		this.animateContainer.append($img);
		this.index++;
		util.prefixedEvent($img[0], 'animationend', () => {
			$img.remove();
		})
	}
}
