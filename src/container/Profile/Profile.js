import {useAuth0} from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import  './Profile.scss';
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import  Landing from '../Landing/Landing.jsx';

function Profile(){

    const {user, logout, isLoading} = useAuth0();
    const [borrowedData, setBorrowedData] = useState([
        {"name": "iclicker", "borrower": "Mark", "returnDate": "2024/01/01"},
        {"name": "iclicker", "borrower": "Mark", "returnDate": "2024/01/01"}
    ]);
    const [lentData, setLentData] = useState([
    ]);

    //data fetching
    /*async function fetchData() {
        const response = await fetch('http://localhost:3001/person-request', {
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
        setBorrowedData(body.borrowHistory)
        setLentData(body.lendHistory)
  
      }
      useEffect(() => {
          fetchData()
      })
    */
    return (
        <div>
        {user && !isLoading && (
        <div id ='profile'>
            <div id = 'center-block'>
            <div id = 'top-panel'>
                <h1 id='title'>Your<br />Items</h1>
                <button id = 'logout-button' onClick={()=>logout()}>Log Out</button>
            </div>
            <div>
                <h2>Borrowed</h2>
                <ul className='profileList'>
                    {!(borrowedData.length==0) && (
                        <div>
                        {borrowedData.map((instance,i)=>(
                        <div className = "profileItem" key = {i}>
                            <p>{instance.name}</p>
                            <p>{instance.lender}</p>
                            <p>{instance.returnDate}</p>
                        </div>
                        ))}
                        </div>
                    )}


                    {(borrowedData.length == 0) && (
                        <div>
                            <h3 className='empty-message'>Your borrowing list is empty. Start <a href='/borrow'>borrowing</a>!</h3>
                        </div>
                    )}
                </ul>
                <h2>Lent</h2>
                <ul className='profileList'>
                    {!(lentData.length==0) && (
                        <div>
                            {lentData.map((instance,i)=>(
                            <div className = "profileItem" key = {i}>
                                <p>{instance.name}</p>
                                <p>{instance.borrower}</p>
                                <p>{instance.returnDate}</p>  
                            </div>
                            ))
                            }
                        </div>
                    )}
                    {(lentData.length==0)&& (
                        <div>
                            <h3 className='empty-message'>Your lending list is empty. Start <a href='/lend'>lending</a>!</h3>
                        </div>
                    )}
                </ul>
            </div>
            </div>
        </div>
        )}
        {!user && !isLoading && (
            <Routes>
                <Route exact path = '/'  element = {<Landing />} />
            </Routes>
        )}
        {!user && isLoading && (
            <div id ='profile'>

            </div>
        )}
        </div>
    )

}
export default Profile