require('./listheader.scss');

export default class ListHeader
{
	static setup()
	{
	    $('.live-list-title h3').on('click', function(){
		  $('.live-list-title h3').removeClass('active');
		  $(this).addClass('active');
		  if($(this).hasClass('live-history-head')){
		    $('.live-chat-area').hide();
		    $('.live-list-area').show();
		  }else{
		    $('.live-list-area').hide();
		    $('.live-chat-area').show();
		  }
        });
	}


}