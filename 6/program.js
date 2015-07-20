
var module = require('./module');

var dirname = process.argv[2];

var extension = process.argv[3];

module(dirname,extension,function(err,files){
	if(err) throw err;

	files.forEach(function(item){
		console.log(item);
	});
});