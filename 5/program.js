
var fs = require('fs');

fs.readdir(process.argv[2],function(err,files){
	if(err) throw err;
	var filtered = [];	
	var extension = '.'+process.argv[3];

	for(i=0;i<files.length;i++){
		if(files[i].indexOf(extension) > -1){
			if(files[i].substring(files[i].indexOf(extension),files[i].length).length === extension.length) 
					filtered.push(files[i]);
		}
	}

	for(i=0;i<filtered.length;i++){
		console.log(filtered[i]);
	}
});
