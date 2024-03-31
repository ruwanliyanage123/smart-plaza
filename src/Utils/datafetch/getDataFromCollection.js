import { addDoc, setDoc, doc, collection, getDocs } from "firebase/firestore";
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
  addDoc(collection(db, collect), document)
    .then((ref) => {
      console.log("Document written with ID: ", ref.id);
    })
    .catch((error) => {
      console.error("Error Adding Document: ", error);
    });
};

const addDataForDatabaseCollectionDocumet = () => {
  setDoc(doc(db, "category/category3/category3", 
  "category3_item1"), {
    title: "category 3 item 1",
    img:"https://1.img-dpreview.com/files/p/TS600x600~sample_galleries/7692340468/4258468533.jpg",
    rating: 2.3
  })
    .then((ref) => {
      console.log("Document written with ID: ", ref.id);
    })
    .catch((error) => {
      console.error("Error Adding Document: ", error);
    });
};

export { getDataFromCollection, addDataForDatabaseCollection, addDataForDatabaseCollectionDocumet };
