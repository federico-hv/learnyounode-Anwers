//Require the fileSystem module
var fs = require('fs');

//Read the text file
var fileBuffer = fs.readFileSync(process.argv[2]);

//Pass the obtained buffer to a string
var string = fileBuffer.toString();

//We count the lines
var lineas = string.split('\n');

var num = lineas.length-1;


console.log(num);
