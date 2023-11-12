import React from 'react';
import  './Lend.scss';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';
import { useState, useEffect} from 'react'


const Lend = () => {
const [lendList, setLendList] = useState()
  async function fetchData() {
      const response = await fetch('http://localhost:3001/lend-request', {
        mode: 'cors',
        headers: {
          method: 'GET',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },

    })
      // const text = await response.text()
      // console.log(text)
      const body = await response.json()
      console.log(body)
      setLendList(JSON.parse(body))

    }
  useEffect(() => {
    fetchData()
  })

  const handleButtonClick = () => {

  }
  return (
<div>
{lendList != undefined && (
    <div id='lend' className='app__lend'>
        <h2 className='head-text'>Lend</h2>
        <p className='p-text'>View all items that you are currently lending or put an item to be borrowed</p>

        <div className='app__lend-lended'>
            <h5 className='head-text'>Your Items</h5>
            <div className='app__lend-lended-container'>
            {lendList.map((item,index) => (
                <div className='app__lend-lended-item'>
                <h2>{item.itemName}</h2>
                <p className='p-text'>{item.lenderName}</p>
                <p className='p-text'>{item.lenderEmail}</p>
                <p className='p-text'>Start {item.timeStart}</p>
                <p className='p-text'>End {item.timeEnd}</p>
            </div>
            ))}
                
                
            </div>
        </div>

    </div>

    )}
    </div>
  )
}

export default Lend