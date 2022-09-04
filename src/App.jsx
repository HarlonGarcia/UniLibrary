import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { LayoutGroup } from 'framer-motion';

import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HelpAndSupport from './components/HelpAndSupport/HelpAndSupport';
import Book from './components/Book/Book';


const App = () => {
  return (
    <BrowserRouter>
      <LayoutGroup id='global'>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="signup" element={ <Registration /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="sobre" element={ <About /> } />     
          <Route path="contact" element={ <Contact /> } />
          <Route path="support" element={ <HelpAndSupport /> } />
          <Route path="book/:id" element={ <Book /> } />
        </Routes>
      </LayoutGroup>
    </BrowserRouter>
  )
}

export default App;
