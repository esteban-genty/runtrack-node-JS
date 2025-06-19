const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function updateStudentCursus(studentId, newYearId) {
  try {
    await client.connect();
    const db = client.db("LaPlateforme");
    const studentCollection = db.collection("student");

    const result = await studentCollection.updateOne(
      { _id: new ObjectId(studentId) },
      { $set: { year_id: newYearId } } 
    );

    if (result.matchedCount === 0) {
      console.log("Aucun étudiant trouvé avec cet ID.");
    } else {
      console.log(`Mise à jour réussie pour l'étudiant ${studentId}.`);
    }

  } catch (err) {
    console.error("Erreur lors de la mise à jour :", err);
  } finally {
    await client.close();
  }
}

const studentId = "685413f6e23b3ddc6504a4f9"; 
const newYearId = 2;    

updateStudentCursus(studentId, newYearId);
