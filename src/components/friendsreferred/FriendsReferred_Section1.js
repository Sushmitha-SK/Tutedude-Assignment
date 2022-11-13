import React from 'react'
import '../friendsreferred/FriendsReferred.css'

const FriendsReferred_Section1 = (props) => {
  const { referalcode } = props
  return (
    <div className='friendsreffered_section1 flex-align-center'>
      <div className="friendsreferred_section1_referralcode">
        <div className="friendsreferred_section1_referralcode_title">
          Your Referral Code
        </div>
        <div className="friendsreferred_section1_referralcode_desc">
          {referalcode.split("").map((value) => (
            <div key={value}>
              {value}
            </div>
          ))}
        </div>

      </div>

      <div className="friendsreferred_section1wallet">
        <div className="friendsreferred_section1wallet_title">
          Wallet Balance
        </div>

        <div className="friendsreferred_section1wallet_value">
          ₹ 500
        </div>
      </div>

    </div>
  )
}

export default FriendsReferred_Section1