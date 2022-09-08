import React from 'react'
import { useState } from 'react'
import {submitLogin} from '../../redux/actions/adminActions'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminLogin = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitLogin({name, password})
        navigate('/donations')
    }

    return (
            <Form onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Name:</Form.Label> */}
                <Form.Control className="w-50" type="name" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password:</Form.Label> */}
                <Form.Control className="w-50" type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
               <Button variant="light" type="submit">Submit</Button>
            </Form>
    )
}


export default connect(null, {submitLogin})(AdminLogin)