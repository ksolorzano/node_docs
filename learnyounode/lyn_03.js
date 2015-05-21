var filename = process.argv[2];
var fs = require("fs");
var buff = fs.readFileSync(filename);
var fileStr = buff.toString();
var arr = fileStr.split('\n');

console.log(arr.length-1);
