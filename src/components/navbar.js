import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useLocation } from 'react-router-dom';

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    // Update the active link whenever the location changes
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Container>
        <Image
          className='Logo'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG47B2MsA2hApVhmJ5tfGDdLyayH3jXTRwA&usqp=CAU"
          alt="Logo"
          roundedCircle
          href="/"
        />
      
        <Navbar.Brand href="/">PORTFOLIO</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" />
          <Nav className="justify-content-end">
            <Nav.Link href="/" className={`navkotext ${activeLink === '/' ? 'active' : ''}`}>Home</Nav.Link>
            <Nav.Link href="/portfolio" className={`navkotext ${activeLink === '/portfolio' ? 'active' : ''}`}>CV</Nav.Link>
            <Nav.Link href="/Contact" className={`navkotext ${activeLink === '/Contact' ? 'active' : ''}`}>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
