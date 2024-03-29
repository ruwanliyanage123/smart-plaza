import { useRef, useState } from 'react'
import Ads from './Ads'
import Product from './Product'
import Loading from '../../components/Loading/Loading';
import PaymentModal from '../../Modals/PaymentModal';

const Home = () => {
  const [loading, setLoading] = useState(false);
  // const paymentModalRef = useRef()
  if(loading)return <Loading />
  return (
    <div className=' pl-6 pr-6 px-5 py-[100px] w-full h-screen overflow-y-scroll' >
       {/* <PaymentModal ref={paymentModalRef} />
       <Ads />
       <button 
         onClick={() => {
          paymentModalRef.current.handleOpen();
         }}>Click</button> */}
       <Product title="trending products" rowsCount={1} slidesPerView={2}/>
       <Product title="Eletric Items" rowsCount={1} slidesPerView={2}/>
       <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
    </div>
  );
}; 

export default Home