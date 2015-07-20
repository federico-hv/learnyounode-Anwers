

var fs = require('fs');

fs.readFile(process.argv[2],function(err,data){
	if(err) throw err;
	
	var buff = data;
	var strArr = buff.toString().split('\n');
	var num = strArr.length-1;

	console.log(num);	
});
