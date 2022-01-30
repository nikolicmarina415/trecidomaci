import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <NavLink className="navbar-brand" to='/' >Izbor optimalnog asortimana</NavLink>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Funkcija cilja</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/masine' className='nav-link'>Masine</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/sirovine' className='nav-link'>Sirovine</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
