import React from 'react';

//import { Footer, Header, Hobbies, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss'
import { Landing } from './container';



const App = () => {
  return (
    <div className='app' >
        <Navbar />
        <Landing />
        


    </div>
  );
}

export default App;