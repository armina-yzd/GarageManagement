import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {MemberProvider} from "./context/memberContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <MemberProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MemberProvider>
 
);
