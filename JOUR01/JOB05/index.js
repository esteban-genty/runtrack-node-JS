const path = require('node:path');

const pathFile = 'C:\\xampp\\htdocs\\runtrack-node-JS\\JOUR01\\JOB05\\index.js';

try{
    const nameFile = path.basename(pathFile);
    console.log('Nom du fichier :', nameFile);

    const extension = path.extname(pathFile);
    console.log("Extension du fichier :", extension);

    const parentDirectory = path.dirname(pathFile);
    console.log("Répertoire parent :", parentDirectory);
}catch (err) {
    console.error("Une erreur s'est produite :", err);
}
