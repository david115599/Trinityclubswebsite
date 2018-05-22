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
  var request = require('request');

request.post(
    'http://www.localhost:8080/JSONS/',
    { json: { user: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
}).listen(8080);

/*var express = require('express');
var router = express.Router();
router.post('/JSONS/', function(req, res) {
    console.log(req);
    console.log('req received');
    res.redirect('/');
});*/
