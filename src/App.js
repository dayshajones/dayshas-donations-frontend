import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import { getDonations } from './redux/actions/donationsAction'
import {connect} from 'react-redux'
import NavigationBar from './components/Navbar/NavigationBar';
import Home from './components/Home';
import DonationsIndex from './containers/Donationsindex'
import CartContainer from './containers/CartConatiner'
import DonationsDetails from './components/Donation/DonationsDetails';
import CheckoutContainer from './components/Checkout/CheckoutContainer'
import BillingForm from "./components/Checkout/BillingForm";
import ThankyouMsg from "./components/Checkout/ThankyouMsg"
import AdminContainer from "./components/Admin/AdminContainer"

function App({getDonations}) {

  useEffect(getDonations, [getDonations])

  const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [address, setAddress] = useState({
		line1: "",
		city: "",
		postal_code: "",
		state: "",
	})

    function handleAddressForm(e) {
      e.preventDefault()
		setAddress({ ...address, [e.target.name]: e.target.value })
	}

  return (
    <>
    <NavigationBar/>
    <br/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/donations" element={<DonationsIndex/>} />
      <Route path="/admin" element={<AdminContainer/>} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/donations/:id" element={<DonationsDetails/>} />
      <Route path="/thankyou" element={<ThankyouMsg/>} />
      <Route path="/checkout" element={ <BillingForm
      name={name}
      email={email}
      setEmail={setEmail}
      setName={setName}
      address={address}
      handleAddressForm={handleAddressForm} />} />
      <Route path="/payment" element={<CheckoutContainer
      name={name}
      address={address}
      email={email} 
      />} />
    </Routes>
    </>
  );
}

export default connect(null, { getDonations })(App)