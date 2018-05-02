var http = require('http');
var url = require('url');
var fs = require('fs');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found such empty");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


/*
var clubs = loadJSONArray("/JSONS/clubs.json");

for (var i = 1; i < json.size(); i++) {
<a href="/clubs/'json.getJSONArray(i)'.html">
<img src="/images/'json.getJSONArray(i)'.jpg" width="300" height="240" alt="'json.getJSONArray(i)'">
<h1>json.getJSONArray(i)</h1>
</a>
  }
*/
