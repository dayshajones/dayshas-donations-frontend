import './App.css';
import Navbar from './components/Navbar';
import DonationsIndex from './containers/Donationsindex'
import About from './components/About'
import Cart from './components/Cart'
import { Route, Routes, Link } from 'react-router-dom'
import DonationsDetails from './components/DonationsDetails';
import CartIcon from '../src/components/CartIcon'

function App() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/donations">Donations</Link>
    <Link to="/cart">{<CartIcon />}</Link>
    <h1>Donations</h1>
    <Routes>
      <Route path="/donations" element={<DonationsIndex/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/donations/:id" element={<DonationsDetails/>} />
    </Routes>
    {/* <DonationsIndex /> */}
    </>
  );
}

export default App;