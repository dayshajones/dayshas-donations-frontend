import React from 'react'
import { useState } from 'react'
import {submitSignup} from '../redux/actions/adminActions'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Admin = (props) => {

  console.log(props)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitSignup({name, password})
    navigate('/')
  }

  return (
    <div>
      <h4>Admin</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default connect(null, {submitSignup})(Admin)