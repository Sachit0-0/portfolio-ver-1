import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; // Import Outlet

import NavbarComponent from './components/navbar';
import Footer from './components/Footer';

// Import your page components
import Banner from './components/banner';
import Portfolio from './routes/portfolio'; // Import Portfolio component
import Contact from './routes/contact'; // Use capital "C"
// Import Contact component
import Skills from './components/Skills'; // Import Skills component

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />

        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Outlet />}> {/* Use Outlet */}
            <Route index element={<Banner />} />
            <Route path="contact" element={<Contact />} /> {/* Include the Contact component */}
            <Route path="portfolio" element={<Portfolio />}> 
            </Route>
          </Route>
        </Routes>
      </div>
      <Skills/>
      <Footer />
    </Router>
  );
}

export default App;
