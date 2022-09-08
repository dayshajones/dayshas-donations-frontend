import React from "react";
import { connect } from "react-redux";
import {logout} from "../../redux/actions/adminActions"

const Logout = ({logout}) => {
    return (
        <button onClick={logout}>Logout</button>
    )
}

const mapStateToProps = (state) => {
    return {name: state.admin.name}
}

export default connect(mapStateToProps, {logout})(Logout)