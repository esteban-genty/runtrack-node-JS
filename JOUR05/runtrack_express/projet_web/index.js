const express = require('express');
const app = express();
const path = require('path');
const port = 80;

//const about = require('');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './views/about.html'));
})

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
