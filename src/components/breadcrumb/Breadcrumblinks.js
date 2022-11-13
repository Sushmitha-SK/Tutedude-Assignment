import React from 'react'
import { NavLink } from 'react-router-dom'
import '../breadcrumb/Breadcrumb.css'

const Breadcrumblinks = (props) => {
    return (
        <div className='breadcrumblinks'>
            <NavLink to={props.link} style={{ textDecoration: 'none', color: '#000000', fontWeight: '400', fontSize: '14px' }}>
                {props.name}
            </NavLink>
            <span className='breadcrumblink_rightarrow'>
                &gt;
            </span>
        </div>
    )
}

export default Breadcrumblinks