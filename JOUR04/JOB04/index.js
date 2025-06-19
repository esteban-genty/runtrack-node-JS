const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("LaPlateforme");

    const yearCollection = db.collection("year");

    const students = [
      { year: "Bachelor 1"},
      { year: "Bachelor 2"},
      { year: "Bachelor 3"},

    ];

    await yearCollection.insertMany(students);
    console.log("Bachelor ajoutés");


  } catch (err) {
    console.error("Erreur de connexion :", err);
  } finally {
    await client.close();
  }
}

run();
