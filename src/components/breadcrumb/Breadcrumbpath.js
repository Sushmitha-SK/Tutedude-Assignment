import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumblinks from './Breadcrumblinks';

const Breadcrumbpath = () => {
    const location = useLocation();
    return (
        <div className='breadcrumbpath' style={{ backgroundColor: "#FFFFFF" }}>
            <nav className='breadcrumbpath_container flex-align-center' style={{ backgroundColor: "#FFFFFF" }}>
                <Breadcrumblinks name="UI/UX" link="/" />
                <Breadcrumblinks name="Refer & Earn" link="/" />
                {location.pathname === "/FriendsReferred" &&
                    <Breadcrumbpath name="Friends Referred" link="/FriendsReferred" />
                }
            </nav>
        </div>
    )
}

export default Breadcrumbpath