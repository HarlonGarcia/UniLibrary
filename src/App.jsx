import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import Header from "./components/Shared/Header/Header";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport";
import Book from "./components/Book/Book";
import Footer from "./components/Shared/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <LayoutGroup id="global">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="sobre" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<HelpAndSupport />} />
          <Route path="book/:id" element={<Book />} />
        </Routes>
        <Footer />
      </LayoutGroup>
    </BrowserRouter>
  );
};

export default App;
