import React from 'react'
import { Link } from 'react-router-dom'


import './navbar.css'
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className='navbar' >
        <div className='links'>
        <Link  to={"/my-ecommerce"} >Shop</Link>
        <Link to={"/Cart"}  >
            Cart
        
        </Link>
        </div>
       


    </div>
  )
}
