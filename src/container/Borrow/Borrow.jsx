import React from 'react'
import  './Borrow.scss';
import { Navbar } from '../../components';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';
import {useState} from 'react'



const Borrow = () => {
  return (
    <div id='home' className='app__borrow '>
      <div className='app__borrow-title-btn'>
        <h4 className='head-text'>Borrow Requests</h4>


      </div>

      <div classname='app__borrow-search'>

      </div>

      <div className='app__borrow-items'>
        <div className='app__borrow-item'>

        </div>

      </div>
     
    
      
      

      
    
  </div>
  )
}

export default Borrow