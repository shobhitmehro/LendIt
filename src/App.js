import React from 'react';

//import { Footer, Header, Hobbies, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss'
import { Landing, Borrow, Lend } from './container';
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



        </Routes>
       
        


    </div>
  );
}

export default App; 