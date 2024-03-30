import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebase";

const getDataFromCollection = async(collect, callback) => {
  const dataArr = [];
  await getDocs(collection(db, collect))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataArr.push(doc.data());
      });
    })
    .catch((error) => {
      console.error("Error fetching documents: ", error);
    });
    callback(dataArr);
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
