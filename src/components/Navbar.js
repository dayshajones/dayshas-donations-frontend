import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/donations">Donations</Link>
    <Link to="/cart">Cart</Link>
    </div>
  )
}
