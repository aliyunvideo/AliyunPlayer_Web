const EventConstant ={
	Comments_Sended:'commentSended',
	Favoriation_Sended:'FavoriationSended'
};

export default class Event
{
	static on(eventName,func)
	{
		$(document).on(eventName, func);
	}

	static trigger(eventName,data)
	{
		$(document).trigger(eventName, data);
	}
    
    static off(eventName,func)
	{
		$(document).off(eventName, func);
	}

	static get EventConstant(){
		return EventConstant;
    };

};