import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="signup" element={ <Registration /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="sobre" element={ <About /> } />     
        <Route path="contact" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
