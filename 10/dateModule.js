
module.exports = function(){

	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();

	var hh = date.getHours();
	var mm = date.getMinutes();

	if(month<10)
		month = '0'+month;

	if(day<10)
		day = '0'+day;

	if(hh<10)
		hh = '0'+hh;

	if(mm<10)
		mm = '0'+mm;


	return year+'-'+month+'-'+day+' '+hh+':'+mm;
};
