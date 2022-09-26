import React from 'react'
import { useSelector } from 'react-redux'
import AdminNav from './AdminNav'
import DefaultNav from './DefaultNav';

const NavigationBar = () => {

  const name = useSelector((state) => state.admin.name)

  return name? <AdminNav/> : <DefaultNav/>
}

export default NavigationBar
