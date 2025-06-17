const { server, hostname, port } = require('./server');

server.listen(port, hostname, () => {
  console.log(`Serveur lancé sur http://${hostname}:${port}/`);
});
