const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("LaPlateforme");
    const studentCollection = db.collection("student");

    const studentsWithYear = await studentCollection.aggregate([
      {
        $lookup: {
          from: "year",   
          localField: "year_id",
          foreignField: "_id", 
          as: "cursus"  
        }
      },
      {
        $unwind: "$cursus"
      }
    ]).toArray();

    console.log("Étudiants avec cursus :");
    studentsWithYear.forEach(student => {
      console.log(`${student.firstname} ${student.lastname} - ${student.cursus.year}`);
    });

  } catch (err) {
    console.error("Erreur de connexion :", err);
  } finally {
    await client.close();
  }
}

run();
