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

    rl.question("Entrez un numéro d'étudiant : ", async (input) => {
      const numberInput = parseInt(input);

      if (isNaN(numberInput)) {
        console.log("Numéro invalide !");
        rl.close();
        await client.close();
        return;
      }

      const filteredStudents = await studentCollection.find({
        students_number: { $gt: numberInput }
      }).toArray();

      console.log(`Etudiants avec un numéro > ${numberInput} :`);
      filteredStudents.forEach(s => {
        console.log(`${s.firstname} ${s.lastname} - Numéro: ${s.students_number}`);
      });

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
