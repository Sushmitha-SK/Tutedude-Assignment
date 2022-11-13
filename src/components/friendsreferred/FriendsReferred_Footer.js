import React from 'react'
import { NavLink } from 'react-router-dom'
import '../friendsreferred/FriendsReferred.css'

const FriendsReferred_Footer = () => {
  return (
    <div className='FriendsReferred_Section3'>
      <div className="friendsreferred_footer">
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <span className="FriendsReferredSection3_Link" >
            Terms & Conditions
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default FriendsReferred_Footer