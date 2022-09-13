import React from 'react'
import AdminLogin from './AdminLogin'
import {useSelector} from 'react-redux'
import DonationForm from '../Donation/DonationForm'

const AdminContainer = () => {

  const name = useSelector(state => state.admin.name)

  return name? <DonationForm/> : <AdminLogin/>
}

export default (AdminContainer)