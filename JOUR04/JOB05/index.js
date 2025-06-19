const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("LaPlateforme");

    const studentCollection = db.collection("student");
    const yearCollection = db.collection("year");

    const allStudents = await studentCollection.find().toArray();
    const allYears = await yearCollection.find().toArray();

    console.log("Liste des étudiants :", allStudents);
    console.log("Liste des années :", allYears);

  } catch (err) {
    console.error("Erreur de connexion :", err);
  } finally {
    await client.close();
  }
}

run();
