import React, { useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SignInButton from './SignInButton';
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {
  const {user} = useAuth0();
  const navItems = user ? [ 'home', 'borrow', 'lend','profile'] : [ 'home', 'borrow', 'lend'];

  return (
  <div className='back'>
    <nav className="app__navbar">
        
        
        <ul className="app__navbar-links">
           {navItems.map((item) => (
              <li className="app__flex p-text" key = {`link'-${item}`}>
                <div />
                <a href={`/${item}`}>{item}</a>
              </li>
           ))}
           {!user &&(
            <li>
                <SignInButton/>
            </li>
           )}
        </ul>

        
    </nav> 
  </div>
  )
}

export default Navbar