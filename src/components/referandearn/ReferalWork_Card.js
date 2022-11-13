import React from 'react'
import '../referandearn/ReferAndEarn.css'

const ReferalWork_Card = (props) => {
    return (
        <div className='ReferalWorkCard flex-align-center'>
            <div className="referalcard_content">
                <div className="referalworkcard_heading">
                    {props.title}
                </div>
                <div className="referalworkcard_contentdetails">
                    {props.subtitle}
                </div>
            </div>
        </div>
    )
}

export default ReferalWork_Card