import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <header className="fix top-0 left-0 z-[100] w-full p-5 bg-my flex items-center justify-between drop-shadow-header-shadow">
        {/* left side */}
        <div className='flex items-center'>
            <MenuIcon sx={{color: "white"}} />
            <h1 className='ml-2 text-sm font-semibold'> 
                Smart <span className='text-white'>Plaza</span>
            </h1>
            <div className='overflow-hidden ml-2 flex items-center rounded-full  bg-white'>
                <input type='text' placeholder='search' className='ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit'/>
                <SearchIcon sx={{color: "grey"}}/>
            </div>
        </div> 

        {/* right side */}
        <AddShoppingCartIcon sx={{color:"white"}}/>
    </header>
  )
}

export default Header