import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
        </ul>
    </nav>

    </>
  )
}

export default Navbar