import React from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top" style={{ backgroundColor: "#000", }}>
        <Container fluid>
          <Navbar.Brand href="#" className='text-white' style={{ fontWeight: "700" }}>About<span className='' style={{ color: "#dc143c" }}>Me</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
              backgroundColor: 'transparent', // Ensure background is transparent
              border: "none",
              padding: '0'
            }}
          >
            <div className='toggle'
              style={{
                width: '40px',
                height: '35px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#dc143c',
                }}
              ></span>
              <span
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#dc143c',
                }}
              ></span>
              <span
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#dc143c',
                }}
              ></span>
            </div>

          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0   nav-container"
              style={{ maxHeight: '100px', scrollbarWidth: "none" }}
              navbarScroll
            >
              <Nav.Link href="" className=' text-white text-center nav-links'>
                <Link to='home' smooth={true} duration={500}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="" className='text-white text-center nav-links'>
                <Link to='about' smooth={true} duration={500}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="" className='text-white text-center nav-links'>
                <Link to='contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
