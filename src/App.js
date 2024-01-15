import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import VisitUs from './components/VisitUs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Page404 from './components/Page404';
import React from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="lg:max-w-full min-w-full container mx-auto">
        <div className="sticky top-0 z-50 lg:static lg:z-auto lg:top-auto">
          <Header menuOpen={menuOpen} toggleMenu={toggleMenu} setMenuOpen={setMenuOpen} />
        </div>
        <div onClick={() => { setMenuOpen(false) }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/visit-us" element={<VisitUs menuOpen={menuOpen} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
    </>
  );
}

export default App;
