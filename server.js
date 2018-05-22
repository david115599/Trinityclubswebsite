var http = require('http');
var url = require('url');
var fs = require('fs');

var adr = 'http://localhost:8080/trinityclubs.html';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log("to view website go to http://localhost:8080/trinityclubs.html");


/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found: (such empty :) )");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
