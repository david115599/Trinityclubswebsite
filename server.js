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
      return res.end("loading... Jk it will never load: 404 Not Found:  (such empty :) )");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

var queryData = url.parse(req.url, true).query;
  res.writeHead(200, {"Content-Type": "text/plain"});

  if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    console.log(queryData.name);
    let data = JSON.stringify(queryData.name, null, 2);

fs.writeFile('JSONS/USERS/'+queryData.name+'.json', data, (err) => {
    if (err) throw err;
    console.log('User written to file');
});
  }
  /*var json = fs.readFile('JSONS/clubs.json');
  var obj = JSON.parse(json);
  for(var i = 0 ;i<=obj.length; i++){
  let data = {
"test"
  }
  fs.writeFile('clubs/'+obj(i)+'.html', data, (err) => {
      if (err) throw err;
      console.log('clubs written to files');
  });
}*/

//need to find a way to prevent acess to user data by typing the path into url
if(q.pathname == "/JSONS"){
    res.writeHead(403, {'Content-Type': 'text/html'});
      return res.end('Access Forbidden');
};
if(q.pathname == "/JSONS/USERS"){
  res.writeHead(403, {'Content-Type': 'text/html'});
    return res.end('Access Forbidden');
};

}).listen(8080);
