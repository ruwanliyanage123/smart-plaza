import React from 'react';
import './Cart.css';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({cartItemCount}) => {
  return (
    <div>
        <div className="cart-icon-container">
            <FaShoppingCart />
            <span className="cart-count">{cartItemCount}</span>
        </div>
    </div>
  )
}

export default Cart