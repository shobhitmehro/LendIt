<<<<<<< Updated upstream
import './App.css';
import SignInButton from './components/signin';
import {Route, Link} from "react-router-dom";
=======
import React from 'react';

//import { Footer, Header, Hobbies, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss'
import { Landing, Borrow, Lend } from './container';
import Profile from './container/Profile/Profile';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
    

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
       
        

>>>>>>> Stashed changes

function App() {
  return(
    <div className='App'>
      
    </div>
  )
}

export default App;
