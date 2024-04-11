import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';


const Header1 = () => {
  const [isSearch, setIsSearch] = useState(false);  
  return (
    <header className="fix top-0 left-0 z-[100] w-full py-5 px-2 bg-my flex items-center justify-between drop-shadow-header-shadow">
        {/* left side */}
        <div className='flex items-center'>
        <IconButton sx={{color:'black'}}>
            <MenuIcon sx={{color: "white"}} />
        </IconButton>
            <h1 className='ml-2 text-sm font-semibold'> 
                Smart <span className='text-white'>Plaza</span>
            </h1>
            <div className='overflow-hidden ml-2 flex items-center rounded-full  bg-white'>
                <input style={{display: (isSearch)  ? 'inline-block':'none'}} type='text' placeholder='search' className= ' hidden md:inline-block  ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit'/>
                <IconButton onClick={()=> setIsSearch(true)} sx={{color:'black'}}>
                    <SearchIcon sx={{color: "grey"}}/>
                </IconButton>
            </div>
        </div> 

        {/* right side */}
        <IconButton sx={{color:'black'}}>
            <div className='relative p-1'>
                <AddShoppingCartIcon sx={{color:"white"}}/>
                <div className=' absolute top-[2px] right-0 text-[10px] font-semibold text-white bg-black flex w-4 h-4 rounded-full'>2</div>
            </div>
        </IconButton>
    </header>
  )
}

export default Header1