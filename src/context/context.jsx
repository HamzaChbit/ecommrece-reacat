import { useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null);
const getCartId = () => {
    let cart={};
    for(let i = 1 ; i<PRODUCTS.length+1;i++){
        cart[i]=0
    }return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCartId() )
    const addToCart = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    }
    const removeToCart = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

   







const ContextValue = {
    getCartId,addToCart,cartItems,removeToCart,
}
console.log(cartItems)

    return (
    <ShopContext.Provider value={ContextValue}  >{props.children}</ShopContext.Provider>
    
    
    )
}