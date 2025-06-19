const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    //const db = client.db("LaPlateforme");

  } catch (err) {
    console.error("Erreur de connexion :", err);
  }
}

run();
