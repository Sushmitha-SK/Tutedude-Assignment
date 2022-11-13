import React from 'react'
import '../friendsreferred/FriendsReferred.css'

const FriendsEnrolled = (props) => {
  return (
    <div className='FriendsEnrolled_Card'>
      <div className="friendsenrolledcard_title flex-align-center">
        <div className="friendsenrolledcard_title_name">
          {props.name}
        </div>
        <div className="friendsenrolledcard_title_date">
          {props.date}
        </div>
      </div>

      <div className="friendsenrolledcard_subtitle">
        Courses Enrolled({props.courseEnrolledNumber})
      </div>

      <div className="friendsenrolledcard_courselist_data">
        <div className='friendsenrolledcard_courselist flex-align-center'>
          {props.courseList.map((value) => (
            <div key={value} className="coursecard">
              {value}
            </div>
          ))}
        </div>

      </div>

      <div className="friendsenrolledcard_footer flex-align-center">
        <div className="friendsenrolled_footer_title">
          Referral Amount
        </div>
        <div className='friendsenrolled_footer_value'>
          {props.referralAmount}
        </div>
      </div>
    </div>
  )
}

export default FriendsEnrolled