var fs = require('fs');
var path = require('path');
var res = [];

module.exports = function(dirname,ext,callback){
  fs.readdir(dirname,function doneReading(err,dirContents){
    if(err){
      return callback(err);
    }else{
      for(i=0;i<dirContents.length;i++){
        if(path.extname(dirContents[i]) === '.'+ext){
          res.push(dirContents[i]);
        }
      }
    }
    callback(null,res);
  })
}
