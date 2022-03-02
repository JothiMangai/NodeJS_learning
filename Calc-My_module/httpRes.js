var http=require('http');

var cal=require('./cacl');
var x=20;
var y=2;

http.createServer(function (res) {
    
    res.write("Addition :"+ cal.add(x,y));
    res.write("Subtraction :"+ cal.sub(x,y));
    res.write("Multiplication :"+ cal.multi(x,y));
    res.write("Division :"+ cal.div(x,y));
    res.end();
  }).listen(8080);