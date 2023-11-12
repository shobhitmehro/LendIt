import {useAuth0} from '@auth0/auth0-react';
import { Navbar } from '../../components';
import SignInButton from '../../components/Navbar/SignInButton';
import { useState } from 'react';
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
        {"name": "iclicker", "lender": "Mark", "returnDate": "2024/01/01"},
        {"name": "iclicker", "lender": "Mark", "returnDate": "2024/01/01"}
    ]);

    

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
                    {lentData.map((instance,i)=>(
                        <div className = "profileItem" key = {i}>
                            <p>{instance.name}</p>
                            <p>{instance.lender}</p>
                            <p>{instance.returnDate}</p>
                        </div>
                    ))
                    }
                </ul>
                <h2>Lent</h2>
                <ul className='profileList'>
                    {borrowedData.map((instance,i)=>(
                        <div className = "profileItem" key = {i}>
                            <p>{instance.name}</p>
                            <p>{instance.borrower}</p>
                            <p>{instance.returnDate}</p>  
                        </div>
                    ))
                    }
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