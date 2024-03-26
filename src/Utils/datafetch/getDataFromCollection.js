import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebase";

const getDataFromCollection = (collect) =>{
    getDocs(collection(db, collect))
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          })
      }
    );
}

const addDataForDatabaseCollection = ({collect, document})=>{
    addDoc(collection(db, collect), document)
    .then((ref) =>{
      console.log("Document written with ID: ", ref.id);
    }).catch((error)=>{
      console.log("Error Adding Document: ", error);
    })
  }

export default getDataFromCollection;