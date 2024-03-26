import { useRef, useState } from 'react'
import Ads from './Ads'
import Product from './Product'
import Loading from '../../components/Loading/Loading';
import PaymentModal from '../../Modals/PaymentModal';
import { IconButton } from '@mui/material';
import db from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import getDataFromCollection from '../../Utils/datafetch/getDataFromCollection';


const Home = () => {
  const [loading, setLoading] = useState(false);
  // const paymentModalRef = useRef()
  if(loading)return <Loading />

  const addData = ()=>{
    addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    }).then((docRef) =>{
      console.log("Document written with ID: ", docRef.id);
    }).catch((error)=>{
      console.log("Error Adding Document: ", error);
    })
  }

  return (
    <div className=' pl-6 pr-6 px-5 py-[100px] w-full h-screen overflow-y-scroll' >
       <Ads />
       <IconButton sx={{color:'red'}}>
          <button className=' color' onClick={() => getDataFromCollection("category")}>Add</button>
       </IconButton>
       <Product title="trending products" rowsCount={1} slidesPerView={2}/>
       <Product title="Eletric Items" rowsCount={1} slidesPerView={2}/>
       <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
    </div>
  );
}; 

export default Home