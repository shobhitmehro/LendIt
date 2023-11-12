import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = "dev-axceyt6u5q46rboz.us.auth0.com";
const clientID = "2bw9FBMuLTsX6gbEe2Qvob4bCnqmBAnH";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Auth0Provider
     domain = {domain}
     clientId= {clientID}
     redirectUri = 'http://localhost:3000/profile'
   >
   <App/>
   </Auth0Provider>
 </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();