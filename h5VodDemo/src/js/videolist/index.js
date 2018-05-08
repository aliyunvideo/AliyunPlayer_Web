const itemHtml = require('./itemlist.html');
require('./index.css');
export  default class VideoList
{
	static setup(id, list, player)
	{
		let $wrapper = $('#'+id);
		list.forEach((item,index)=>{
			let $item = $(itemHtml),
			$img = $item.find('img');
			$img.attr('src', item.cover);
			$img.attr('url', item.url);
			$item.find('p').text(item.title);
			$wrapper.append($item);
		});

		$wrapper.click((e)=>{
			let url = $(e.target).attr('url');
			if(url)
			{
				player.loadByUrl(url);
			}
		});
	}

}