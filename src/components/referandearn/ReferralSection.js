import React from 'react'
import '../referandearn/ReferAndEarn.css'
import ReferalDetails from './ReferalDetails'

const ReferralSection = (props) => {
  const { referalcode } = props
  return (
    <div className='ReferandEarn_Section1 flex-align-center'>
      <div className="ReferandEarn_Section1_details flex-align-center">
        <ReferalDetails name="Referral Earning" value="₹ 2,500" />
        <ReferalDetails name="Total Referrals" value="7" />
        <ReferalDetails name="Wallet Balance" value="₹ 500" />
        <div className="referandearnbtn">
          <button className="referalbtn">
            Withdraw Balance
          </button>
        </div>
      </div>

      <div className="ReferaandEarn_Section_refcode">
        <div className="ReferaandEarn_Section_refcode_title">
          Your Referral Code
        </div>
        <div className="ReferaandEarn_Section_refcode_input">
          {referalcode.split("").map((value) => (
            <div key={value} className="code_value">
              {value}
            </div>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default ReferralSection