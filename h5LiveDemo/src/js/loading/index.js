
export default class Loading
{
	static show(backgroundOpacity=0)
	{
		if(backgroundOpacity!=0)
		{
			$('.loading-container').css('opacity',backgroundOpacity);
		}
		$('.loading-container').addClass('show');
	}
	static hide()
	{
		$('.loading-container').css('opacity',0);
		$('.loading-container').addClass('hide');
	}
}