const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let greet = require('./hello');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  let name = 'Zhouxingzu';
  greet(name);
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});