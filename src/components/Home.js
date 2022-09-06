import React from 'react'
import AdminSignup from './Admin/AdminSignup'
import AdminLogin from './Admin/AdminLogin'
import { connect } from 'react-redux'
import DonationForm from './Donation/DonationForm'

const Home = ({name}) => {
  // console.log({name})

  const loggedIn = () => 
    <div>
      <div>
        <AdminSignup/>
        </div>
        <div>
        <DonationForm/>
        </div>
    </div>

  const signIn = () =>
    <div>
        <AdminLogin/>
    </div>

  return name? loggedIn() : signIn ()
}

const mapStateToProps = (state) => ({name: state.admin.name})

export default connect(mapStateToProps)(Home)