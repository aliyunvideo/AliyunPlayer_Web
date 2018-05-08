require('./chat.scss');
const chatItem = require('./chatitem.html');

export default class Chat
{
	static setup(useInfo)
	{
		let wrapper = $('.msg-list');
		$('.send-btn').click(()=>{
			let text = $('.send-txt').val();
			let $item = $(chatItem);
			$item.find('.avatar').attr('src', useInfo.avatar);
			$item.find('.nick').text(useInfo.nickName);
			$item.find('.txt').text(text);
			wrapper.append($item);
			$('.send-txt').val("");
		})
	}
}


  

  