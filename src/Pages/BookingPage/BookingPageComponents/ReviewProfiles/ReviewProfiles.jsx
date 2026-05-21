import React from 'react'
import {ReviewProfilesContainer, ReviewProfile} from './ReviewProfiles.styled'

const ReviewProfileItem = ({ img, reviewName, reviewDate, reviewTxt }) => {
  return (
    <ReviewProfile>
      <img src={img} alt={reviewName} />
      <div>
        <h4 style={{ margin: '0', fontSize: '1rem', fontWeight: '600', color: '#222' }}>{reviewName}</h4>
        <p style={{ margin: '0.25rem 0 0.75rem 0', fontSize: '0.85rem', color: '#888' }}>{reviewDate}</p>
        <p style={{ margin: '0', fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>{reviewTxt}</p>
      </div>
    </ReviewProfile>
  )
}

const ReviewProfiles = () => {
  const reviews = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
      reviewName: "Andy Rand",
      reviewDate: "January 2024",
      reviewTxt: "Great place! Exactly as described and very clean. Check-in was smooth and the host was friendly and responsive. Would definitely stay again."
    },
    {
      img: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
      reviewName: "Paul Smith",
      reviewDate: "July 2025",
      reviewTxt: "Perfect location and a comfortable stay. The apartment had everything we needed for a short trip. Highly recommend!"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJtogP2fBCv9F41ncZeh4sl-gKz2nEztr_Q&s",
      reviewName: "Sarah Mitchell",
      reviewDate: "February 2025",
      reviewTxt: "Lovely home with a cozy atmosphere. The host provided clear instructions and was quick to answer any questions. We enjoyed our stay."
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_640.jpg",
      reviewName: "Michael Knight",
      reviewDate: "June 2025",
      reviewTxt: "Really nice space — quiet, tidy, and well-equipped. Close to shops and restaurants. Would book again for sure."
    },
    {
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      reviewName: "Chloe Walters",
      reviewDate: "September 2025",
      reviewTxt: "Fantastic stay! The place was spotless and the bed was super comfortable. Host made everything easy. Five stars!"
    },
    {
      img: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
      reviewName: "Megan Foster",
      reviewDate: "November 2025",
      reviewTxt: "Great value for the price. The area felt safe, and the amenities were exactly what we expected. Enjoyed every moment."
    },    {
      img: "https://t3.ftcdn.net/jpg/06/01/50/96/360_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg",
      reviewName: "Mary Jane",
      reviewDate: "November 2024",
      reviewTxt: "Absolutely loved our stay! The place was spotless, cozy, and exactly like the photos. The host was super responsive and made check-in a breeze. Would definitely stay here again."
    },    {
      img: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
      reviewName: "Kevin Brown",
      reviewDate: "January 2025",
      reviewTxt: "Perfect location and very peaceful. The home had everything we needed for a comfortable stay. Great value for money and the bed was incredibly comfortable."
    },
 
  ]

  return (
    <ReviewProfilesContainer>
      {reviews.map((review, idx) => (
        <ReviewProfileItem key={idx} {...review} />
      ))}
    </ReviewProfilesContainer>
  )
}

export default ReviewProfiles