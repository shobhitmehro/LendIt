import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const domain = 'dev-axceyt6u5q46rboz.us.auth0.com';
const clientID = '2bw9FBMuLTsX6gbEe2Qvob4bCnqmBAnH';

ReactDOM.render(

  <BrowserRouter>
    <Auth0Provider
      domain = {domain}
      clientId= {clientID}
      redirectUri = 'http://localhost:3000/home'
    > 
    <App/>
    </Auth0Provider>
  </BrowserRouter>

, document.getElementById('root'))