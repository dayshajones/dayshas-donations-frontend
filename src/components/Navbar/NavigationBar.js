import React from 'react'
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import DefaultNav from './DefaultNav';

const NavigationBar = ({name}) => {

  return name? <AdminNav/> : <DefaultNav/>
}

const mapStateToProps = (state) => {
  return {name: state.admin.name}
}

export default connect(mapStateToProps)(NavigationBar)
