import React from 'react'
import { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {CartItemsCart } from './CartItems'
import {ShopContext}from '../../context/context'
import {useNavigate} from 'react-router-dom'
import "./cart.css";

export const Cart = () => {
    const {cartItems }=useContext(ShopContext );
    const navigate = useNavigate();
  return (
<div  className='cart' > <div><h1>Your Cart Items</h1></div>   
            
            
 <div className='cart' >
      
        <div className='cartItems' >
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !== 0 ){
                    return    <CartItemsCart  data={product}/>
                }
            })}

</div>
<div  className='checkout'   ><button>checkout</button>
<button   onClick={()=> navigate('/')} >Go to Shopping</button>
</div>
    </div></div>
 
  )
}
