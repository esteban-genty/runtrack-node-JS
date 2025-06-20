const express = require('express');
const app = express();
const port = 80;

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
