import React from 'react'
import { useState, useEffect} from 'react'
import  './Borrow.scss';

const Borrow = () => {
  const [borrowList, setBorrowList] = useState({})
  async function fetchData() {
      const response = await fetch('http://localhost:3001/borrow-request', {
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
      setBorrowList(body)
    }
  useEffect(() => {
    fetchData()
  })

  return (
    <div>Borrow
      {borrowList && 
        <h1>
          {borrowList.length}grgs
        </h1>
      }

    </div>
  )
}

export default Borrow