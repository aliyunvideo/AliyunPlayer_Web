import Event from '../events';
require('./index.css');
export default class CommentSender
{
	static setup()
	{
		$('.comment-textbox .send-btn').click(()=>{
            let $text = $('.comment-textbox .send-txt');
			let msg = $text.val();
			Event.trigger(Event.EventConstant.Comments_Sended, {
				name: '小鱼儿',
				comment: msg
			});
			$text.val("");
		});
		$('.comment-textbox .favoriate-send').click(()=>{
			Event.trigger(Event.EventConstant.Favoriation_Sended);
		})
	}
}