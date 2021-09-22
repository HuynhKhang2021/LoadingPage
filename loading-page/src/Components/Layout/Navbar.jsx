import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-branch">
                <span className='navbar-branch__icon'></span>
                <span className="branch-name">M&M</span>
            </div>
            <div className="navbar-links">
                <a href="" className="navbar-links__faq">FAQ</a>
                <a href="" className="navbar-links__faq">Usage</a>
                <a href="" className="navbar-links__faq">About</a>
            </div>
            <div className="navbar-user">
                <button className="navbar-user__login">Login</button>
                <button className="navbar-register">Register</button>
            </div>
        </div>
    )
}

export default Navbar
