import Event from '../events';

export default class MqttDataHandle {
	static handle(data) {
		//评论推送
		if (data && data.type === 0) {
			
			let sender = data.data.sender;
			Event.trigger(Event.EventConstant.Comments_Sended, {
				name: sender.nickName,
				comment: data.data.commentTxt
			});
		} else if (data && data.type === 1) { //喜欢推送
			Event.trigger(Event.EventConstant.Favoriation_Sended);
		} else if (data && data.type === 2) { //加入直播
		} else if (data && data.type === 3) { //关闭直播
		} else if (data && data.type === 4) { //退出直播
		} else if (data && data.type === 6) { //退到后台
		} else if (data && data.type === 7) { //开始直播
		} else if (data && data.type === 8) { //流重新建立
			//重新推流处理
		} else if (data && data.type === 9) { //推流中断
			//可以提示('主播暂时离开，请稍后');
		}
	}
}
