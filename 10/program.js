
var net = require('net');
var date = require('./dateModule'); // -> Doesn't always pass even though the result is correct. Why???
var port = process.argv[2];
var strftime = require('strftime');


var server = net.createServer(function(socket){
	//socket.end(date());
	socket.end(strftime('%Y-%m-%d %H:%M'));
}).listen(port);
