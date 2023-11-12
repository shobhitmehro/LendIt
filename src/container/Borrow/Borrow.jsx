import React from 'react'
import  './Borrow.scss';
import { Navbar } from '../../components';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';
import {useState} from 'react'



const Borrow = () => {


  return (
    <div id='borrow' className='app__borrow '>
        <div className='app__borrow-title-btn'>
          <h4 className='head-text'>Borrow Requests</h4>
        </div>

        <div classname='app__borrow-search'>
          <input className='search-bar'
            type="text"
            placeholder="Search here"
            //backend onChange={handleChange}
            //backend value={searchInput} 
            />
        </div>

        <div className='app__borrow-item-display'>
          <div className='app__borrow-item'>
            <img src={images.iclicker} alt='image' />
            <h6 className='head-text'>iClicker</h6>
            <p> Get now. Return by 11/15/23</p>
            <button type='button'>Borrow Now</button>
          </div>
          <div className='app__borrow-item'>
            <img src={images.ipad} alt='image' />
            <h6 className='head-text'>iPad</h6>
            <p> Get now. Return by 11/19/23</p>
            <button type='button'>Borrow Now</button>

          </div>
          <div className='app__borrow-item'>
            <img src={images.charger} alt='image' />
            <h6 className='head-text'>iPhone Charger</h6>
            <p> Get now. Return by 11/25/23</p>
            <button type='button'>Borrow Now</button>

          </div>
          <div className='app__borrow-item'>
            <img src={images.charger} alt='image' />
            <h6 className='head-text'>iPhone Charger</h6>
            <p> Get now. Return by 11/25/23</p>
            <button type='button'>Borrow Now</button>

          </div>
         
          
          
        </div>
    </div>
  )
}

export default Borrow