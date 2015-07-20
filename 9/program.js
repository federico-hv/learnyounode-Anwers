

var http = require('http');

var urls = process.argv.filter(function(item,index){
				return index > 1;
});



//Prints all the content from the given url

function printContent(url){
	var dat = [];

	http.get(url,function(res){
		res.on('error',function(){
			//console.log('error');
		});

		res.on('data',function(data){
			dat.push(data);
		});

		res.on('end',function(){
			console.log(dat.join(''));
			var next = (urls.indexOf(url)+1);
			if(! next <= urls.length){
				printContent(urls[next]);
			}
		});
	});
}


printContent(urls[0]);



/** 
	OFFICIAL
	
	var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

 **/