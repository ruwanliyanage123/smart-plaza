import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Header = () => {
  return (
    <div className='header'>
        <div className='menu'>
            <Link to="/">Men</Link>
            <Link to="/">Woman</Link>
            <Link to="/">Kids</Link>
            <Link to="/">Baby</Link>
        </div>
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <Cart cartItemCount={2}/>
            </Link>
        </div>
    </div>
  )
}

export default Header