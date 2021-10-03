import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './UserContext';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
         <App />
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
