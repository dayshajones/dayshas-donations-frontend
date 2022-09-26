import React from "react";
import { connect } from "react-redux";
import {logout} from "../../redux/actions/adminActions"
import Button from 'react-bootstrap/Button';

const Logout = ({logout}) => {

    return (
        <Button variant="light" onClick={logout}>Logout</Button>
    )
}

export default connect(null, {logout})(Logout)