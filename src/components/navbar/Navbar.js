import React from 'react'
import './Navbar.css'
import Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import user from '../../images/user.png'
import arrowdown from '../../images/arrowdown.png'

function Navbar() {
    return (
        <header className="navbar_container">
            <div className="navbar flex-align-center ">
                <div className="logo">
                    <img src={Logo} alt='logo' />
                </div>
                <div className="navbaritem">
                    <NavLink to="/" className='navlink_item'>My Assignment</NavLink>
                    <NavLink to="/" className='navlink_item'>Chat with Mentor</NavLink>
                    <NavLink to="/" className='navlink_item'>
                        <div className="navprofile">
                            <div className="navlink_profile">
                                <img src={user} alt='user' />
                            </div>
                            <span>Profile Name</span>
                            <div className="downarrow">
                                <img src={arrowdown} alt='arrowdown' />
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar