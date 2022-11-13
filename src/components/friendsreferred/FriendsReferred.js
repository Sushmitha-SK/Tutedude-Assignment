import React from 'react'
import { NavLink } from 'react-router-dom'
import '../friendsreferred/FriendsReferred.css'
import Arrow from '../../images/Arrow.png'
import FriendsReferredSection1 from './FriendsReferred_Section1'
import FriendsReferredSection2 from './FriendsReferred_Section2'
import FriendsReferredFooter from './FriendsReferred_Footer'

function FriendsReferred(props) {
  return (
    <div>
      <div className="FriendsReferred workspace">
        <NavLink to="/">
          <div className="friendsreferred_goback">
            <div className="flex-align-center">
              <img src={Arrow} alt='Arrow' />
            </div>
            <div className="goback_text">Go Back</div>
          </div>
        </NavLink>
      </div>
      <div className="FriendsReferred workspace">
        <FriendsReferredSection1 referalcode={props.referalcode} />
      </div>

      <div className="FriendsReferred workspace">
        <FriendsReferredSection2 />
      </div>
      <div className="FriendsReferred workspace">
        <FriendsReferredFooter />
      </div>
    </div>
  )
}

export default FriendsReferred