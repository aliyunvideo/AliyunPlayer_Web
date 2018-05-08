import config from '../config';

export default class Request {
  constructor() {}
  
  static request(params, options, host = config.api_host) {
    let ps = (params.action ? params.action : '').split(/\s+/g),
      requestType = ps[0].toLowerCase(),
      url = ps[1];

    delete params.action;
    let option = {
      type: requestType,
      url: url,
      data: params
    }
    if (options) {
      $.extend(option, options);
    }
    return Request.send(option, host)
  }

  static send(option, host) {
    // let promise = new Promise((resolve, reject) => {
    let successCallback = option.success;
    let errorCallback = option.error;
    let defaultOptions = {
      dataType: 'json',
      success: function(data) {
        if (data.code != 200) {
          console.log(data.message);
        }
        if (successCallback){
          successCallback(data);
        }
      },
      error: function(xhr, type, error) {
        if (errorCallback)
          errorCallback({
            code: xhr.status,
            message: xhr.statusText
          });
      }
    }

    $.extend(defaultOptions, option);
    defaultOptions.url = host + option.url;

    $.ajax(defaultOptions);

  }
}
