var http = require('http');
//loads http module
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.0';
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code
  res.end('Hello World\n');
  //outputs string with line end symbol
}).listen(server_port, server_ip_address);
//sets port and IP address of the server
console.log('Server running at ' +  server_port);
