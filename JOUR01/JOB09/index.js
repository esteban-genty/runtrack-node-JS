const fs = require('node:fs');

const newContent = "Je manipule les fichiers avec un module node !";
const path = 'data.txt';

try {
  fs.writeFileSync(path, newContent);
  console.log("Le fichier à bien été modifié");
} catch (err) {
  console.error(err);
}
