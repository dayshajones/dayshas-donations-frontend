import React from 'react'
import AdminLogin from './AdminLogin'
import { connect } from 'react-redux'
import DonationForm from '../Donation/DonationForm'

const AdminContainer = ({name}) => {

  return name? <DonationForm/> : <AdminLogin/>
}

const mapStateToProps = (state) => ({name: state.admin.name})

export default connect(mapStateToProps)(AdminContainer)