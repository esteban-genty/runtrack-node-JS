const fs = require('fs');

const path = "data.txt";

try {
  const contentData = fs.readFileSync(path, 'utf8');
  console.log("Contenu du fichier data.txt :");
  console.log(contentData);
} catch (err) {
  console.error("Une erreur s'est produite :", err);
}
