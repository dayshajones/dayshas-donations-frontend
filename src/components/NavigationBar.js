import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartFill } from "react-icons/bs";


export default function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Daysha's Donations</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="donations">Donations</Nav.Link>
              <Nav.Link href="cart"><BsFillCartFill/></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}
