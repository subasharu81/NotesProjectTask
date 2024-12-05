import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Notes from './pages/Notes/Notes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Signup from './pages/Singup/Singup';
import BreadCrumb from './components/BreadCrumbs/Breadcrumbs';




function Index(){
  return <div >
    <BrowserRouter>
    <Header/>
      <BreadCrumb />
      <Routes>
          <Route 
              index element={<Signup/>}
           />  
          <Route 
            path='signIn' element={<SignIn/>}
          />
          <Route 
            path='register' element={<Signup />}
          />
          <Route 
            path='home' element={<Home />}
          />
          <Route 
            path='notes' element={ <Notes/>}
          />
      </Routes>
    </BrowserRouter>
      
      
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Index/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
