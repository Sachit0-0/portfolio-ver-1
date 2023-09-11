import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="transparent" variant="dark">
      <Container>
        <Image
          className='Logo'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG47B2MsA2hApVhmJ5tfGDdLyayH3jXTRwA&usqp=CAU"
          alt="Logo"
          roundedCircle
        />
      
        <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="justify-content-end"> {/* Use justify-content-end to push links to the right */}
            <Nav.Link href="/" className="navkotext">Home</Nav.Link>
            <Nav.Link href="/portfolio" className="navkotext">CV</Nav.Link>
            <Nav.Link href="/Contact" className="navkotext">Contacts</Nav.Link>
            <Nav.Link href="/" className="navkotext">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
