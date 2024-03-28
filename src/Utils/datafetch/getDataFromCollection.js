import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebase";

const getDataFromCollection = (collect) => {
  getDocs(collection(db, collect))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    })
    .catch((error) => {
      console.error("Error fetching documents: ", error);
    });
};


const addDataForDatabaseCollection = (collect, document) => {
  console.log(`document : ${document.title}`);
  addDoc(collection(db, collect), document)
    .then((ref) => {
      console.log("Document written with ID: ", ref.id);
    })
    .catch((error) => {
      console.error("Error Adding Document: ", error);
    });
};

export { getDataFromCollection, addDataForDatabaseCollection };
