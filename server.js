//Web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    var path = './' + pathname;
    if (pathname == '/') {
        path = './index.html';
    }
    fs.readFile(path, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});
server.listen(8080);

// Launch Node.js in a terminal
// Type: node server.js
// Then open URL: http://localhost:8080/
