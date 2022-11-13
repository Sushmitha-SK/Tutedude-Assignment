import React from 'react'
import Friends from '../../images/Friends.png'
import Purchase from '../../images/Purchase.png'
import Rupee from '../../images/Rupee.png'
import Discount from '../../images/Discount.png'
import Transfer from '../../images/Transfer.png'
import '../referandearn/ReferAndEarn.css'

const ReferalWorkSection = () => {
    return (
        <div className='ReferandEarn_Section2'>
            <div className="referandearnsection2_title">
                How does it work?
            </div>

            <div className="referandearnsection2_details">
                <div className='ReferalWorkCard flex-align-center'>
                    <div className="referalworkcardicon flex-align-center">
                        <img src={Friends} alt='Friends' />
                    </div>
                    <div className="referalcard_content">
                        <div className="referalworkcard_heading">
                            Invite your Friends
                        </div>
                        <div className="referalworkcard_contentdetails">
                            Share the link tutedude.com with your friends
                        </div>
                    </div>
                </div>

                <div className='ReferalWorkCard flex-align-center'>
                    <div className="referalworkcardicon flex-align-center">
                        <img src={Purchase} alt='Friends' />
                    </div>
                    <div className="referalcard_content">
                        <div className="referalworkcard_heading">
                            Friend purchases any course
                        </div>
                        <div className="referalworkcard_contentdetails">
                            Using your REFERRAL CODE in the payments page
                        </div>
                    </div>
                </div>

                <div className='ReferalWorkCard flex-align-center'>
                    <div className="referalworkcardicon flex-align-center">
                        <img src={Rupee} alt='Rupee' />
                    </div>
                    <div className="referalcard_content">
                        <div className="referalworkcard_heading">
                            You get ₹ 200 as referral money
                        </div>
                        <div className="referalworkcard_contentdetails">
                            On total purchase the friend makes, into your wallet
                        </div>
                    </div>
                </div>

                <div className='ReferalWorkCard flex-align-center'>
                    <div className="referalworkcardicon flex-align-center">
                        <img src={Discount} alt='Discount' />
                    </div>
                    <div className="referalcard_content">
                        <div className="referalworkcard_heading">
                            Your Friend gets ₹ 200 Off
                        </div>
                        <div className="referalworkcard_contentdetails">
                            On his overall fee on successful purchase using your referral code
                        </div>
                    </div>
                </div>

                <div className='ReferalWorkCard flex-align-center'>
                    <div className="referalworkcardicon flex-align-center">
                        <img src={Transfer} alt='Transfer' />
                    </div>
                    <div className="referalcard_content">
                        <div className="referalworkcard_heading">
                            Transfer money from wallet
                        </div>
                        <div className="referalworkcard_contentdetails">
                            When the wallet balance reaches ₹200 or more, you can withdraw it
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferalWorkSection