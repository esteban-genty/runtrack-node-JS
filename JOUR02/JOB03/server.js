const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 8888;

const server = createServer();

module.exports = {
  server,
  hostname,
  port
};
