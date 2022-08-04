import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Cart from './Cart'

export default function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donations">Donations</Link>
    </div>
  )
}
