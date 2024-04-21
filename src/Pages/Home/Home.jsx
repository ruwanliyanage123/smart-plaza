import { useState } from 'react'
import Ads from './Ads'
import './Home.css';
import Product from './Product'
import Loading from '../../components/Loading/Loading';
import { addDataForDatabaseCollection, addDataForDatabaseCollectionDocumet } from '../../Utils/datafetch/getDataFromCollection';
import MainContainer from '../../Layout/MainContainer';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [loading, setLoading] = useState(false);
  if(loading)return <Loading />
  return (
    <div className='home'>
      <div className='advertisement'>
        <Ads />
      </div>
      <button onClick={() => addDataForDatabaseCollectionDocumet()}>Adding</button>
      <Product title="trending products" rowsCount={1} slidesPerView={2}/>
      <Product title="Eletric Items" rowsCount={1} slidesPerView={2}/>
      <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
      <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
      <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
      <Footer />
    </div>
  );
}; 

export default Home;