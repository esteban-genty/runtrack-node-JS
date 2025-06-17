let tasks = [
        {
            "id": 1,
            "titre": "Faire les courses",
            "desc": "Acheter du pain, du lait et des œufs",
            "completed": false
        },
        {
            "id": 2,
            "titre": "Réviser le cours de maths",
            "desc": "Étudier les chapitres 3 et 4 pour le contrôle de demain",
            "completed": true
        },
        {
            "id": 3,
            "titre": "Envoyer l'email à Paul",
            "desc": "Répondre au mail concernant le projet de groupe",
            "completed": false
        }
];

function getAllTasks(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasks));
}


function createTask(req, res) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    const newTask = JSON.parse(body);
    newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push(newTask);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newTask));
  });
}

function updateTask(req, res, id) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    const updatedData = JSON.parse(body);
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(tasks[taskIndex]));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Task not found' }));
    }
  });
}

function deleteTask(req, res, id) {
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index !== -1) {
    const deleted = tasks.splice(index, 1);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(deleted[0]));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Task not found' }));
  }
}


module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};
