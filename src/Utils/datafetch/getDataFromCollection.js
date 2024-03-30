import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebase";

const dbData = {}

const getDataFromCollection = async(collect, callback) => {
  if(dbData[collect] && dbData[collect].length>0){
     callback(dbData[collect]);
  }else{
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
      dbData[collect] = dataArr;
      callback(dataArr);
  }
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
