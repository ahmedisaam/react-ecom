import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css';

export const CartItem = (props) => {
const {id, productName, price, productImage} = props.data;
const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =  useContext(ShopContext);

  return (
    <div className="cartitem">
        <img src={productImage} />
        <div className="desc">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
