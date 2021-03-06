import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Image from 'react-bootstrap/Image'
import "./my-navbar.styles.css"
import Oricale from "../../assets/imgs/Oricale.webp"



const MyNavbar = () => {
  return (
    <><Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="animate-navbar nav-theme justify-content-between">
    
    <Navbar.Brand href="#home"><Image className="logo1" alt="logo" src={Oricale}  />Chris Ashman</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar></>
  )
}
  
  export default MyNavbar;
  