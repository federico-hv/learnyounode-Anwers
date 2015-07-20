var http = require('http');
var map = require('through2-map');

var port = process.argv[2];


http.createServer(function(req,res){
	if(req.method == 'POST'){
		var body = '';
		req.pipe(map(function(data){
			return data.toString().toUpperCase();
		})).pipe(res);
	}
	else{
		res.end('Please try with post');
	}
}).listen(port);



/** No through2-map



http.createServer(function(req,res){
	if(req.method == 'POST'){
		var body = '';
		req.on('data',function(data){
			body+=data;
		});
		req.on('end',function(){
			res.end(body.toString().toUpperCase());
		});
	}
	else{
		res.end('Please try with post');
	}
}).listen(port);

**/
