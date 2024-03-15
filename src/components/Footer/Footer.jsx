import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false
  })
  return <footer className="fixed bottom-0 left-0 z-[100] w-full py-3 px-2 bg-my flex items-center justify-between drop-shadow-header-shadow">
     <FooterIcon clilckFun={{whoIsClick, setWhoIsClick}} Icon={HomeOutlinedIcon} title={"Home"}/>
     <FooterIcon clilckFun={{whoIsClick, setWhoIsClick}} Icon={AppsOutlinedIcon} title={"Category"}/>
     <FooterIcon clilckFun={{whoIsClick, setWhoIsClick}} Icon={AccountCircleOutlinedIcon} title={"Profile"}/>
  </footer>;
};

export default Footer
 
const FooterIcon = ({Icon, title, clilckFun}) =>{
  const clickHandle = (home, category, profile) =>{
    const obj = {
      Home: true,
      Category: false,
      Profile: false
    }
    if(title ==="Profile"){
       obj.Home = false;
       obj.Profile = true;
       obj.Category = false;
    }
    else if(title ==="Category"){
       obj.Home = false;
       obj.Profile = false;
       obj.Category = true;
    }
    else if(title ==="Home"){
       obj.Home = true;
       obj.Profile = false;
       obj.Category = false;
    }
    clilckFun.setWhoIsClick(obj)
  }
  
  return(
  <IconButton sx={{color:'white', borderRadius:"5px", paddingTop:'0', padding:"4px"}}>
    <div style={{
      color: clilckFun.whoIsClick[title] &&'#c82196',
      backgroundColor: clilckFun.whoIsClick[title] &&'black',
    }} 
    className=' text-gray-700 hover:text-[#c82196] transition-all'
    onClick={clickHandle}
    >
      <Icon />
      <p className=' text-xs font-bold'>{title}</p>
    </div>
  </IconButton>
)}