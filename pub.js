var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
  client.publish('konojunya', ""+Date.now());
});

client.on("message",function(topic,message){
	client.end();
});