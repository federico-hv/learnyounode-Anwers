
var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileLocation = process.argv[3];


http.createServer(function(req,res){
	// res.writeHead(200, { 'content-type': 'text/plain' }) original solution sets the head of the response
	fs.createReadStream(fileLocation,'UTF-8').pipe(res);
}).listen(port);