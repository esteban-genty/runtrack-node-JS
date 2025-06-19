const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function deleteStudent(studentId) {
  try {
    await client.connect();
    const db = client.db("LaPlateforme");
    const studentCollection = db.collection("student");

    const result = await studentCollection.deleteOne({ _id: new ObjectId(studentId) });

    if (result.deletedCount === 1) {
      console.log(`Étudiant avec l'ID ${studentId} supprimé avec succès.`);
    } else {
      console.log("Aucun étudiant trouvé avec cet ID.");
    }
  } catch (err) {
    console.error("Erreur lors de la suppression :", err);
  } finally {
    await client.close();
  }
}

const studentId = "685419d1d7396c94023c80d5";
deleteStudent(studentId);
