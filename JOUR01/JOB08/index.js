const fs = require('fs');

const path = "data.txt";
let newContent = "";

try {
    const content = fs.readFileSync(path, 'utf8');
    console.log("Contenu du fichier data.txt :");
        
    for(let i = 0; i < content.length; i += 2) {
        newContent += content[i]
        //console.log(i);
    }
    console.log(newContent);

} catch (err) {
     console.error("Une erreur s'est produite :", err);
}
