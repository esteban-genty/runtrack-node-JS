const { MongoClient } = require("mongodb");
const readline = require("readline");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("LaPlateforme");
    const studentCollection = db.collection("student");

    rl.question("Entrez le nom de famille d'étudiant : ", async (input) => {
      const nameInput = input.trim();

      const filteredStudents = await studentCollection.find({
        lastname: nameInput
      }).toArray();

      if (filteredStudents.length === 0) {
        console.log(`Aucun étudiant trouvé avec le nom de famille "${nameInput}".`);
      } else {
        console.log(`Étudiants avec le nom de famille "${nameInput}" :`);
        filteredStudents.forEach(s => {
          console.log(`${s.firstname} ${s.lastname} - Numéro: ${s.students_number}`);
        });
      }

      rl.close();
      await client.close();
    });

  } catch (err) {
    console.error("Erreur :", err);
    rl.close();
    await client.close();
  }
}

run();
