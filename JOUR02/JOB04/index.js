const { server, hostname, port } = require('./server');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require('./routes');

server.on('request', (req, res) => {
  const url = new URL(req.url, `http://${hostname}:${port}`);
  const method = req.method;


  if (url.pathname === '/tasks') {
    if (method === 'GET') return getAllTasks(req, res);
    if (method === 'POST') return createTask(req, res);
  }


  const taskIdMatch = url.pathname.match(/^\/tasks\/(\d+)$/);
  if (taskIdMatch) {
    const id = taskIdMatch[1];
    if (method === 'PUT') return updateTask(req, res, id);
    if (method === 'DELETE') return deleteTask(req, res, id);
  }


  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Route not found' }));
});

server.listen(port, hostname, () => {
  console.log(`Serveur lancé sur http://${hostname}:${port}/`);
});
