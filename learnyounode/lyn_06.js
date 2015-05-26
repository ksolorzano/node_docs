var filelist = require('./lyn_06_m.js');

filelist(process.argv[2],process.argv[3],function(err,filearr){
  if(err){
    console.log(err);
  }else{
    for(i=0;i<filearr.length;i++){
      console.log(filearr[i]);
    }
  }
});
