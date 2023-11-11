import React from 'react';
import  './Landing.scss';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';


const Landing = () => {
  return (
    <div id='home' className='app__landing '>
     
      <motion.div
        whileInView={{  opacity: [0,1]}}
        transition={{ duration: 0.75}}
        className='app__landing-info'
      >
        
        <div className='app__landing-title'>
        <div className='r'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft: 20}}>
              <h1 className='head-text'>LendIt</h1>
              <h1 className='head-text'>Don't</h1>
              <h1 className='head-text'>Spend It</h1>
            </div>

            
            <div className='app__landing-img'>
                <img src={images.handshake} alt='handshake' className='img' />
            </div>
          </div>
            
          </div>

        <div className='app__landing-desc'>
          <p className='p-text'> The go to marketplace for lending and</p>
          <span></span>
          <p className='p-text'> borrowing items on your college campus</p>


          
        </div>

        

        

        <div className='app__landing-buttons'>
            <button type='button' className='b1'>Borrow</button>
            <button type='button' className='b2'>Lend</button>

        </div>

        

        

        </div>
      </motion.div>

        
      
    </div>
  )
}

export default Landing