import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import DonationsIndex from './containers/Donationsindex'
import About from './components/About'
import Cart from './components/Cart'
import DonationsDetails from './components/DonationsDetails';

function App() {
  return (
    <>
    <NavigationBar/> 
    <h1>Donations</h1>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/donations" element={<DonationsIndex/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/donations/:id" element={<DonationsDetails/>} />
    </Routes>
    </>
  );
}

export default App;