import VideoComments from './videocomments';
import Event from '../events';
require('./index.css');
export default class CommentBuffer {
	constructor(wrapper, player) {
		this.comments = [];
		this._wrapper = wrapper;
		this.liveComment = new VideoComments(wrapper,player);
		let that = this;
		Event.on(Event.EventConstant.Comments_Sended, (e,data)=>{
			this.add(data);
		})
	}

	clear()
	{
		this.stop();
		this.liveComment.clear();
	}

	add(comment) {
		if (this.isStop)
			return;
		this.comments.push(comment);
		if (!this.isWorking) {
			this._wake();
		}
	}

	stop() {
		this.comments = [];
		this.isWorking = false;
		this.isStop = true;
		clearInterval(this.interval)
	}

	start() {
		this.isStop = false;
	}

	_wake() {
		this.isWorking = true;
		this.interval = setInterval(this._handle(), 500)
	}

	_handle() {
		var that = this;
		return function() {
			if (that.comments.length > 0) {
				if (that.liveComment.isFull()) {
					that.liveComment.send("");
				}
				let comment = that.comments.shift();
				that.liveComment.send(comment);
				that._wrapper.scrollTop(that._wrapper[0].scrollHeight);

			} else {
				that.isWorking = false;
				clearInterval(that.interval);
			}
		}
	}
}
