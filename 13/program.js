
var http = require('http');
var url = require('url');
var port = process.argv[2];


http.createServer(function(req,res){ 
    var obj = url.parse(req.url,true);
    console.log(obj.query);

    if(isEmpty(obj.query)){
       res.end('Please enter some parameter for your query.');
    } 

	if(obj.pathname == '/api/parsetime'){
	  if(obj.query.iso){
	  	var date = new Date(obj.query.iso);
	  	console.log(date);
	  	var obj = {
        hour:date.getHours(),
        minute:date.getMinutes(),
        second:date.getSeconds()
      };
      res.writeHead(200,{'Content-Type':'application/json;  charset=utf-8'});
      res.end(JSON.stringify(obj));
	  }
	  else{
	  	res.writeHead(404);
	    res.end('Please enter an iso parameter. Example: ?iso=2015-08-03T02:09:03.980Z');
	  }
	}
	else if(obj.pathname == '/api/unixtime'){
		if(obj.query.iso){
			var date = new Date(obj.query.iso);
	    var obj = {
        unixtime: date.getTime()
      };
      res.writeHead(200,{'Content-Type':'application/json;  charset=utf-8'});
      res.end(JSON.stringify(obj));
		}
		else{
			res.writeHead(404);
			res.end('Please enter an iso parameter. Example: ?iso=2015-08-03T02:09:03.980Z');
		}
	}
	else{
	  res.writeHead(404);
	  res.end('This path doesn\'t exist.');
	}
}).listen(port);


function isEmpty(obj){
   for (var key in obj) {
     if (Object.prototype.hasOwnProperty.call(obj, key)) {
       return false;
     }
   }
   return true;
}
