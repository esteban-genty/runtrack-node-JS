const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 8888;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

module.exports = {
  server,
  hostname,
  port
};
