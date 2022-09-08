import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Logout from '../Admin/Logout';

const AdminNav = () => {
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
                        <Nav.Link>Add Donation</Nav.Link>
                    </LinkContainer>
                    <Logout/>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default AdminNav