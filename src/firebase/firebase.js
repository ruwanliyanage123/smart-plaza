import { getApps,  getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "",
   authDomain: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: ""
};

const app = getApps.length? getApp():initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;