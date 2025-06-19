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
      { firstname: "test", lastname: "LeBricoleur", year_id: 1, id: 1, students_number: "S123456" }
    ];

      const isValidStudent = student =>
      typeof student.firstname === "string" &&
      typeof student.lastname === "string" &&
      typeof student.students_number === "string" &&
      typeof student.id === "number" &&
      typeof student.year_id === "number";

    const allValid = students.every(isValidStudent);

    if (!allValid) {
      console.log("Tous les champs doivent être correctement remplis avec le bon type (string/int).");
      return;
    }

    await studentCollection.insertMany(students);
    console.log("Étudiants ajoutés avec succès.");

  } catch (err) {
    console.error("Erreur de connexion :", err);
  } finally {
    await client.close();
  }
}

run();