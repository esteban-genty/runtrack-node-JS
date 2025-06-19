const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("LaPlateforme");

    const studentCollection = db.collection("student");

    const students = [
      { firstname: "Bob", lastname: "LeBricoleur" },
      { firstname: "John", lastname: "Doe" },
      { firstname: "Marine", lastname: "Dupont" }
    ];

    await studentCollection.insertMany(students);
    console.log("Étudiants ajoutés");


  } catch (err) {
    console.error("Erreur de connexion :", err);
  } finally {
    await client.close();
  }
}

run();
