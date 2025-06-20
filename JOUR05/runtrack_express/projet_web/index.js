const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './views/about.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './views/404.html'));
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
