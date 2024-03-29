import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import CartIcon from '../Cart/CartIcon'

export const DefaultNav = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
            <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/donations">
                <Nav.Link>Donations</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
                <Nav.Link>
                <BsFillCartFill/> <CartIcon/>
                </Nav.Link>
            </LinkContainer>

            </Nav>
        </Container>
    </Navbar>
    )
}

export default DefaultNav