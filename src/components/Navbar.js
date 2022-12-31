import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
 
return (
    <div className="header">
        <Link to='/'>
          <h1>Home</h1>
          </Link>
        <ul className={click ? "nav-menu.active" : "nav-menu"}>
          <li >
            <Link to='/About'>About</Link>
          </li>
          <li >
            <Link to='/Skills'>Skills</Link>
          </li>
          <li >
            <Link to='/Projects'>Projects</Link>
          </li>
          <li >
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
        <div className='Bars' onClick={handleClick}>
          {click ? (<FaBars size={30} style={{color:'fff'}} />): null}
          
          <FaBars size={30} style={{color:'fff'}} />

          
        
          </div>  
    </div>
  )
}

export default Navbar;