import React, { useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SignInButton from './SignInButton';


const Navbar = () => {

  return (

    

  <div className='back'>
    <nav className="app__navbar">
        
        
        <ul className="app__navbar-links">
           {[ 'home', 'borrow', 'lend'].map((item) => (
              <li className="app__flex p-text" key = {`link'-${item}`}>
                <div />
                <a href={`/${item}`}>{item}</a>
              </li>
           ))}
           <SignInButton/>
        </ul>

        
    </nav> 
  </div>
  )
}

export default Navbar