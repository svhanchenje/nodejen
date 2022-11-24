// var express = require("express");
 
// var app = express();

//     //Respond with "hello world" for requests that hit our root "/"
// app.get("/", function (req, res) {​​
//  res.send("hello world");
// }​​);

//     //listen to port 3000 by default
// app.listen(process.env.PORT || 3000);
 
// module.exports = app;
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});