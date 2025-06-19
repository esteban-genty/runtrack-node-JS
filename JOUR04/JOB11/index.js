const { MongoClient } = require("mongodb");
const fs = require("fs");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function exportStudentsToJson() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("LaPlateforme");
    const studentCollection = db.collection("student");

    const students = await studentCollection.find().toArray();

    fs.writeFileSync("students.json", JSON.stringify(students, null, 2), "utf-8");
    console.log("Exportation terminée dans 'students.json'");

  } catch (err) {
    console.error("Erreur lors de l'exportation :", err);
  } finally {
    await client.close();
  }
}

exportStudentsToJson();
