import React from 'react';


//import { Footer, Header, Hobbies, Skills, Works } from './container';
import './App.scss'
import { Landing, Borrow, Lend } from './container';
import Profile from './container/Profile/Profile';
import { BrowserRouter as Router, Routes, Route }
   from 'react-router-dom';
import { Navbar } from './components';
  


const App = () => {
 return (
   <div className='app' >
       <Navbar />


       <Routes>
         <Route exact path = '/'  element = {<Landing />} />
         <Route exact path = 'home'  element = {<Landing />} />


         <Route exact path = 'borrow'  element = {<Borrow />} />
         <Route exact path = 'lend'  element = {<Lend />} />
         <Route exact path = 'profile' element = {<Profile />} />






       </Routes>
     
      
   </div>
 )
}


export default App;