var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function doneReading(err,dirContents){
  for(i=0;i<dirContents.length;i++){
    if(path.extname(dirContents[i]) === '.'+process.argv[3]){
      console.log(dirContents[i]);
    }
  }
});
