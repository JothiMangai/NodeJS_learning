var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

  fs.appendFile('Docfl.txt', '"Content is written from NodeJS !!"', function (err) {
    if (err) throw err;
    console.log('Saved!');
     });

  fs.readFile('Docfl.txt', function(err, data) {
    res.write(data);
    return res.end();
  });
}).listen(8020);

