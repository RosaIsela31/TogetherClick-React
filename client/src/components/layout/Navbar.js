import React from 'react'
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";


export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1> 
        <Link to='/'>
          <FaApple /> TogetherClick
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Developers</a>
        </li>
        <li>
          <Link to='/register'>Regístrate</Link>
        </li>
        <li>
          <Link to='/login'>Inicia Sesión</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;