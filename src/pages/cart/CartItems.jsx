import { useContext } from "react"
import { ShopContext } from "../../context/context"
import React  from 'react'

export const CartItemsCart = (props) => {
    const{id,price,productName,productImage}=props.data;
    const {cartItems,addToCart,removeToCart}=useContext(ShopContext );
  return (
    <div className='cartItem' >
        <img src={productImage}  />
      
    <div className='description'>
    <p><b>{productName}</b></p>
    
    <p>Price :  {price}$</p>
    <div className='countHandler'>
      <button  onClick={()=> removeToCart(id)} >-</button>
      <input  value={cartItems[id]}/>
      <button onClick={  ()=>addToCart(id)} >+</button>

    </div>
    </div>
    </div>
 
  )
}
