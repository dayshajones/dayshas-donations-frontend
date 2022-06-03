import './App.css';
import DonationsIndex from './containers/Donationsindex'
import About from './components/About'
import Cart from './components/Cart'
import { Route, Routes, Link } from 'react-router-dom'
import DonationsDetails from './components/DonationsDetails';
import React, { useState } from "react"


function App() {

  const [cartDonations, setCartDonations ] = useState([])
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/donations">Donations</Link>
    <Link to="/cart">Cart</Link>
    <h1>Donations</h1>
    <Routes>
      <Route path="/donations" element={<DonationsIndex/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart cartDonations={cartDonations}/>} />
      <Route path="/donations/:id" element={<DonationsDetails/>} />
    </Routes>
    {/* <DonationsIndex /> */}
    </>
  );
}

export default App;