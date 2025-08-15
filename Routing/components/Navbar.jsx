import React from 'react'
import {link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h2>Routing</h2>
        <ul>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Contact</NavLink>
        </ul>
    </div>
  )
}

export default Navbar