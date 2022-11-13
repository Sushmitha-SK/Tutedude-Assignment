import React from 'react'
import '../referandearn/ReferAndEarn.css'

const ReferalDetails = (props) => {
  return (
    <div className='referaldetails'>
      <div className='referaldetails_name'>{props.name}</div>
      <div className='referaldetails_value'>{props.value}</div>
    </div>
  )
}

export default ReferalDetails