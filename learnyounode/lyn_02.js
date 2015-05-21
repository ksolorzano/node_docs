var args = process.argv;
var res = 0;
for(i=2;i<args.length;i++){
  res+= +args[i];
}
console.log(res);
