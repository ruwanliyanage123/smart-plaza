import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';

const Footer = () => {
  return <footer className="fixed bottom-0 left-0 z-[100] w-full py-3 px-2 bg-my flex items-center justify-between drop-shadow-header-shadow">
     <FooterIcon Icon={HomeOutlinedIcon} title={"Home"}/>
     <FooterIcon Icon={AppsOutlinedIcon} title={"Category"}/>
     <FooterIcon Icon={AccountCircleOutlinedIcon} title={"Profile"}/>
  </footer>;
}

export default Footer
 
const FooterIcon = ({Icon, title}) =>(
  <IconButton sx={{color:'white', borderRadius:"5px", paddingTop:'0', padding:"4px"}}>
    <div className=' text-gray-700 hover:text-[#c82196] transition-all'>
      <Icon />
      <p className=' text-xs font-bold'>{title}</p>
    </div>
  </IconButton>
  //36.01
)