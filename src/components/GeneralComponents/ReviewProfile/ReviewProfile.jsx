import React from 'react'
import { ReviewProfileContainer, ReviewProfileHeader, ReviewProfileBody, ReviewProfileTitle, ReviewProfileSubtitle } from './ReviewProfile.styled'


const ReviewProfile = ({img ,reviewName, reviewDate ,reviewTxt }) => {
  return (
    <ReviewProfileContainer>
      <ReviewProfileHeader>
        <div>
          <img src={img} alt='Profile' className="profile-picture" />
          </div>
          <div className="name">
            <ReviewProfileTitle>{reviewName}</ReviewProfileTitle>
            <ReviewProfileSubtitle>{reviewDate}</ReviewProfileSubtitle>
          </div>
      </ReviewProfileHeader>
      <ReviewProfileBody>
        <ReviewProfileTitle className='review-txt'>{reviewTxt}</ReviewProfileTitle>
      </ReviewProfileBody>
    </ReviewProfileContainer>
  )
}

export default ReviewProfile