import React from 'react'
import { useContext } from 'react';
import {ShopContext}from '../../context/context'



export const Product = (props) => {
    const{id,price,productName,productImage}=props.products;
    const{addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <button className='button' onClick={()=>addToCart(id)} >ADD to Cart ({cartItemAmount>0 && <>{cartItemAmount}</>})</button>
      </div>
    
    </div>
  )
}
