import React from 'react'
import FriendsEnrolled from './FriendsEnrolled'

const FriendsReferred_Section2 = () => {
    const course1 = ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"]
    const course2 = ["UI/UX", "Photoshop", "Iluustrator", "Python", "MERN", "Java", "C++"]
    const course3 = ["UI/UX", "Photoshop", "Iluustrator", "Python", "MERN", "Java", "C++"]
    return (
        <div className='FriendsReferred_Section2'>
            <div className="friendsreferred_section2_title">
                <span>Friends who enrolled(3)</span>
            </div>

            <div className="friendsreferred_section2_desc flex-align-center">
                <FriendsEnrolled name="Dhiraj Saxsena" date="14 Sep, 2022" courseEnrolledNumber="6" referralAmount="₹185" courseList={course1} />
                <FriendsEnrolled name="Subhash Mishra" date="15 Sep, 2022" courseEnrolledNumber="23" referralAmount="₹485" courseList={course2} />
                <FriendsEnrolled name="Prafull Kumar" date="16 Sep, 2022" courseEnrolledNumber="23" referralAmount="₹485" courseList={course3} />
            </div>

        </div>
    )
}

export default FriendsReferred_Section2