import React from 'react';
import  './Lend.scss';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';

const Lend = () => {
  return (
    <div id='lend' className='app__lend'>
        <h2 className='head-text'>Lend</h2>
        <p className='p-text'>View all items that you are currently lending or put an item to be borrowed</p>

        <div className='app__lend-lended'>
            <h5 className='head-text'>Your Items</h5>
            <div className='app__lend-lended-container'>
                <div className='app__lend-lended-item'>
                    <h2>Title</h2>
                    <p className='p-text'>Duration</p>
                    <p className='p-text'>User</p>
                </div>
                <div className='app__lend-lended-item'>
                    <h2>Title</h2>
                    <p className='p-text'>Duration</p>
                    <p className='p-text'>User</p>
                </div>
                <div className='app__lend-lended-item'>
                    <h2>Title</h2>
                    <p className='p-text'>Duration</p>
                    <p className='p-text'>User</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Lend