import { useState } from 'react'
import Ads from './Ads'
import Product from './Product'
import Loading from '../../components/Loading/Loading';
import { addDataForDatabaseCollection, getDataFromCollection } from '../../Utils/datafetch/getDataFromCollection';
import { IconButton } from '@mui/material';

const categoryObject = 
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 6',
      categoryId: 'category6'   
  }

const Home = () => {
  const [loading, setLoading] = useState(false);
  if(loading)return <Loading />

  return (
    <div className=' pl-6 pr-6 px-5 py-[100px] w-full h-screen overflow-y-scroll' >
       <Ads />
       <IconButton>
          <button onClick={() => getDataFromCollection("item-categories")}>Adding</button>
       </IconButton>
       <Product title="trending products" rowsCount={1} slidesPerView={2}/>
       <Product title="Eletric Items" rowsCount={1} slidesPerView={2}/>
       <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
    </div>
  );
}; 

export default Home