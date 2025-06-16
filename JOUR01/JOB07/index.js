const fs = require('node:fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
        console.log("Contenu du fichier data.txt :");
        console.log(data);
});
