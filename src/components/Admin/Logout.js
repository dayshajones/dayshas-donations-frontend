import React from "react";
import { connect } from "react-redux";
import {logout} from "../../redux/actions/adminActions"
import Button from 'react-bootstrap/Button';

const Logout = ({logout}) => {

    return (
        <Button variant="light" onClick={logout}>Logout</Button>
    )
}


const mapDispatchToProps = dispatch => {
    return {
      logout: () => { dispatch(logout())
      }
    }
  }


export default connect(null, mapDispatchToProps)(Logout)