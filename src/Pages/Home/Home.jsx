import { useState } from 'react'
import Ads from './Ads'
import Product from './Product'
import Loading from '../../components/Loading/Loading';
import { addDataForDatabaseCollection, addDataForDatabaseCollectionDocumet } from '../../Utils/datafetch/getDataFromCollection';
import MainContainer from '../../Layout/MainContainer';

const Home = () => {
  const [loading, setLoading] = useState(false);
  if(loading)return <Loading />
  return (
    <MainContainer>
       <Ads />
       <button onClick={() => addDataForDatabaseCollectionDocumet()}>Adding</button>
       <Product title="trending products" rowsCount={1} slidesPerView={2}/>
       <Product title="Eletric Items" rowsCount={1} slidesPerView={2}/>
       <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
    </MainContainer>
  );
}; 

export default Home;