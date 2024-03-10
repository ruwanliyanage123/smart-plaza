import React from 'react';
import menu from '../../img/cart.svg';
import cart from '../../img/menu.svg';
import search from '../../img/search.svg';

const Header = () => {
  return (
    <header className="fix top-0 left-0 z-[100] w-full p-5 bg-my flex items-center justify-between drop-shadow-header-shadow">
        {/* left side */}
        <div className='flex items-center'>
            <img src={menu} alt="menu" className=' w-6 h-6 object-contain cursor-pointer'/>
            <h1 className='ml-2 text-sm font-semibold'> 
                Smart <span className='text-white'>Plaza</span>
            </h1>
            <div className='overflow-hidden ml-2 flex items-center rounded-full  bg-white'>
                <input type='text' placeholder='search' className='ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit'/>
                <img src={search} alt="search" className='ml-2 w-6 h-6 object-contain cursor-pointer'/>
            </div>
        </div> 

        {/* right side */}
        <img src={cart} alt="cart" className=' w-6 h-6 object-contain cursor-pointer'/>
    </header>
  )
}

export default Header