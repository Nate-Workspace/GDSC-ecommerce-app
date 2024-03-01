import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/Items"> Items </Link>
            <Link to="/Cart"> Cart </Link>
        </div>
    </div>
  )
}
