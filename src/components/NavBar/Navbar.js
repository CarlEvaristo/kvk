import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation().pathname

    return (
        <div className="navbar">
            <img src="/images/logo.jpg" alt="logo" className='logo' />
            <div className="links">
                <Link to="/" className={`link ${location === "/" && "active"} `} >Home</Link>
            </div>
        </div>
  ) 
}