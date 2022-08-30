import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import CartIcon from '../components/Cart/CartIcon'

const NavigationBar = () => {
  return (
    <>
       <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">Daysha's Donations</Navbar.Brand> */}
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/donations">
                <Nav.Link>Donations</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <BsFillCartFill/> <CartIcon/>
                </Nav.Link>
              </LinkContainer>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar