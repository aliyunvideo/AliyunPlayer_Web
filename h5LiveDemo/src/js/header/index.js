import Event from '../events';
require('./index.css');
export default class Header {

	constructor() {
		this.backup = [];
		this.max_count = 5;
	}


	setup(data) {
		let header = $('.video-header');
		header.find('.user-name').text(data.nickName);
		header.find('.user-head-img').attr('src', data.avatar);
		this._updateLikeNumber(data.likeNum);
		this._updateViewNumber(data.viewerNum);
		this._getAudiences();
		let that = this;
		Event.on(Event.EventConstant.Favoriation_Sended, ()=>{
			that._updateLikeNumber(1);
		});
		Event.on(Event.EventConstant.Viwer_Added, ()=>{
			that._updateViewNumber(1);
		})
	}

	_updateLikeNumber(number) {
		let ele = $('.video-header .user-favorite');
		let count = parseInt(ele.text());
		ele.text(count + number);
	}

	_updateViewNumber(number, userInfo) {
		if (number != null) {
			let ele = $('.video-header span.audience-count');
			let count = parseInt(ele.text());
			ele.text(`${count+number}人`);
		}
		let wrapper = $('.audience-detail');
		Header.computeLeft($('.video-header .author'), wrapper);
		if (userInfo) {
			if (userInfo.type === 0) {
				if (!this.isFullHeaders) {
					Header._createImgHeader(wrapper, userInfo.avatar, userInfo.uid);
					this.isFullHeaders = (wrapper.find('.audience-header').length == this.max_count)
				} else {
					$('.audience-detail .ellipsis').addClass('show');
					this.backup.push(userInfo);
				}
			} else {
				if (this.backup.length > 0) {
					let user = this.backup.pop(),
						imgEle = wrapper.find('img[data-uid="' + userInfo.uid + '"]');
					imgEle.attr('src', user.avatar);
					imgEle.attr('data-uid', user.uid);

				} else {
					wrapper.find('img[data-uid="' + userInfo.uid + '"]').remove();
					$('.audience-detail .ellipsis').addClass('hide');
					this.isFullHeaders = false;
				}
			}
		}

	}

	_getAudiences(liveId, url) {
		for(let i=1;i<10;i++)
		{
		   Header._createImgHeader($('.audience-detail'), "./images/avatar.jpg", i);
	    }
	}

	static _createImgHeader(wrapper, avatar, uid) {
		let img = $('<img  class="audience-header">');
		img.attr('src', avatar);
		img.attr('data-uid', uid);
		wrapper.prepend(img)

	}

	static computeLeft(audient, detail) {
		let w = audient.width() +  (20 / 68) * window.rem;
		detail.css('left', w);
	}
}
