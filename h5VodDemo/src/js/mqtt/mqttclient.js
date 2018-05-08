import mqttDataHandle from './mqttDataHandle';

export default class MqttClient {
	//'183.129.191.60', 9000
	constructor(host, port, path, clientId) {
		this.client = new Paho.MQTT.Client(host, port, path, "ClientIderer");
		this.client.onConnect = this.onConnect;
		this.client.onMessageArrived = this.onMessageArrived;
		let that = this;
		this.client.onConnectionLost = (responseObject)=>{
			this.onConnectionLost(that,responseObject);
		}
		this.connected = false;
		this.option = {
			host: host,
			port: port,
			path: path,
			clientId: clientId
		}
		this.tryCount = 0;
		this.forceClosed = false;
	}

	connect(successCallback) {
		this.client.connect({
			onSuccess: (arg) => {
				this.connected = true;
				this.forceClosed = false;
				successCallback(arg);
			},
			onFailure: (arg) => {
				console.log(`连接到$(this.option.host}:${this.option.port}失败`);
			},
			userName: "MqttWebServer",
			password: "MqttWebServer",
		});
	}

	subscribe(topic) {
		this.client.subscribe(topic);
		this.topic = topic;
	}

	publish(topic, message) {
		this.client.send(topic, message);
	}

	disconnect() {
		this.connected = false;
		this.forceClosed = true;
		this.client.disconnect();
		console.log('web socket 关闭');
	}

	onConnectionLost(that, responseObject) {
		that.connected = false;
		if (responseObject.errorCode !== 0) {
			console.log(responseObject.errorCode + "\n" + responseObject.errorMessage);
			if (that.tryCount < 6) {
				that.tryCount++;
				that.connect(() => {
					setTimeout(() => {
						that.tryCount = 0;
					}, 60000);
					that.subscribe(that.topic);
				}, util.noop);
			}
		}

	}

	onMessageArrived(message) {
		try {
			if (message && message.payloadString) {
				console.log(message.payloadString);
				var data = $.parseJSON(message.payloadString)
				mqttDataHandle.handle(data);
			}
		} catch (e) {
			console.log(e);
		}
	}


}
