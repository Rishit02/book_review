import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { NavLink } from 'react-router-dom'

function BasicExample() {

  const handleClick = (e) => {
    axios.delete("/api/v1/logout")
    .then(resp => console.log("User logged out"))
    .catch(err => console.log("Error: ", err))
  }
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>PagePal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/signup'>Signup</Nav.Link>
            <Nav.Link as={NavLink} to='/' onClick={handleClick}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;