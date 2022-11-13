import React from 'react'
import { NavLink } from 'react-router-dom'
import '../referandearn/ReferAndEarn.css'

const ReferAndEarnFriendsEnroll = () => {
  return (
    <div className='ReferandEarn_Section3'>
      <div className="referandearn_footer">
        <NavLink to='/FriendsReferred' style={{ textDecoration: 'none' }}>
          <div>
            <span className="ReferAndEarnSection3_Link">
              Friends Who Enrolled
            </span>
          </div>
        </NavLink>
        <br />
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <span className="ReferAndEarnSection3_Link" >
            Terms & Conditions
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default ReferAndEarnFriendsEnroll