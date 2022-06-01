import './App.css';
import DonationsIndex from './containers/Donationsindex'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/donations">Donations</Link>
    <h1>Donations</h1>
    <Routes>
      <Route path="/donations" element={<DonationsIndex/>} />
    </Routes>
    {/* <DonationsIndex /> */}
    </>
  );
}

export default App;
