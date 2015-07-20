var fs = require('fs');


module.exports = function(dirname,ext,callback){
	
	var arg1;

	fs.readdir(dirname,function(err,files){
		if(err) {
			callback(err);
		}
		else{
			var filtered = [];	
			var extension = '.'+ext;

			for(i=0;i<files.length;i++){
				if(files[i].indexOf(extension) > -1){
					if(files[i].substring(files[i].indexOf(extension),files[i].length).length === extension.length) 
							filtered.push(files[i]);
				}
			}

			/**	OFFICIAL SOLUTION -> filter function, extname !!!

				list = list.filter(function (file) {
		          return path.extname(file) === '.' + filterStr
		        })
			*/

			callback(null,filtered);
		}
	});

};


