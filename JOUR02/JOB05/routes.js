const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');

let tasks = [];

function loadTasks() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    const json = JSON.parse(data);
    tasks = json.tasks || [];
  } catch (err) {
    tasks = [];
    console.error('Erreur lors du chargement des tasks:', err);
  }
}

function saveTasks() {
  try {
    const data = JSON.stringify({ tasks }, null, 2);
    fs.writeFileSync(dataPath, data, 'utf-8');
  } catch (err) {
    console.error('Erreur lors de la sauvegarde des tasks:', err);
  }
}

loadTasks();

function getAllTasks(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasks));
}

function createTask(req, res) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    try {
      const newTask = JSON.parse(body);
      newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      tasks.push(newTask);
      saveTasks();
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newTask));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON invalide' }));
    }
  });
}

function updateTask(req, res, id) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    try {
      const updatedData = JSON.parse(body);
      const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
        saveTasks();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks[taskIndex]));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Tâche non trouvée' }));
      }
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON invalide' }));
    }
  });
}

function deleteTask(req, res, id) {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    saveTasks();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(deletedTask));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Tâche non trouvée' }));
  }
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};
