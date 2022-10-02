import React, {useState} from 'react'
import {submitLogin} from '../../redux/actions/adminActions'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminLogin = ({submitLogin}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //     console.log(name)
    // }, [name])

    const handleSubmit = (e) => {
        e.preventDefault()
        const admin = {name, password}
        submitLogin(admin)
    }


    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <div className='admin-login'>
            <Form onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control className="w-50" type="name" value={name} placeholder="Enter name" onChange={handleName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control className="w-50" type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
               <Button variant="light" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      submitLogin: ({name, password}) => { dispatch(submitLogin({name, password}))
      }
    }
  }



export default connect(null, mapDispatchToProps)(AdminLogin)