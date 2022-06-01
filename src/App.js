import './App.css';
import DonationsIndex from './containers/Donationsindex'
import About from './components/About'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/donations">Donations</Link>
    <Link to="/about">About</Link>
    <h1>Donations</h1>
    <Routes>
      <Route path="/donations" element={<DonationsIndex/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    {/* <DonationsIndex /> */}
    </>
  );
}

export default App;
