import React from 'react'
import ReferalWorkSection from './ReferalWorkSection'
import ReferAndEarnFriendsEnroll from './ReferAndEarnFriendsEnroll'
import ReferralSection from './ReferralSection'
import '../referandearn/ReferAndEarn.css'

function ReferAndEarn(props) {
  return (
    <div>
      <div className="referandearn">
        <ReferralSection referalcode={props.referalcode} />
        <ReferalWorkSection />
        <ReferAndEarnFriendsEnroll />
      </div>
    </div>
  )
}

export default ReferAndEarn