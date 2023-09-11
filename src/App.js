import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import NavbarComponent from './components/navbar';
import Footer from './components/Footer';

// Import your page components
import Banner from './components/banner';
import Portfolio from './routes/portfolio'; // Import Portfolio component
import Contact from './routes/contact'; // Use capital "C"
import Skills from './components/Skills'; // Import Skills component

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Banner />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </div>
     
      <Skills /> {/* Skills component is still outside of the Router */}
      <Footer />
    </Router>
  );
}

export default App;
