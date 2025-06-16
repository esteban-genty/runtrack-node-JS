const url = require('url');

const path = new URL ("https://www.google.com/search?q=nodejs");

try{
    console.log("Protocole:", path.protocol);
    console.log("Hôte:", path.host);
    console.log("Paramètres de l'URL:", path.searchParams.get('q'));
    path.hostname = 'www.laplateforme.io';
    console.log(path.host);

    // Nouvelle URL
    path.searchParams.append('search', 'nodejs');
    const newUrl = path.toString();
    console.log(newUrl);

}catch(err){
    console.error("Une erreur s'est produite :", err);
}

