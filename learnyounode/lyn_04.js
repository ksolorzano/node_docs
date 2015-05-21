var filename = process.argv[2];
var fs = require('fs');

fs.readFile(filename,function doneReading(err,fileContents){
  var res = fileContents.toString().split('\n').length-1;
  console.log(res);
})
