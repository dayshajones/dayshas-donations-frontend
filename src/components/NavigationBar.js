import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartFill } from "react-icons/bs";
import CartIcon from '../components/CartIcon'

export default function NavigationBar() {
  return (
    <>
       <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">Daysha's Donations</Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="donations">Donations</Nav.Link>
              <Nav.Link href="cart"><BsFillCartFill/><CartIcon/></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}
