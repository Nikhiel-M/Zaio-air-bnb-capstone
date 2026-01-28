import React from 'react'
import { HostContainer} from './HostContainer.styled'
import { BookingTitle, BookingSubtitle } from '../BookingPage.styled';
import { GoStarFill } from "react-icons/go";
import { FaCheckCircle, FaMedal } from "react-icons/fa";
import { PillButton } from '../../../components/Buttons/PillButton.styled';
import { API_BASE_URL } from '../../../services/api';

const BACKEND_URL = API_BASE_URL.replace('/api', '');

const HostDisplayContainer = ({ property }) => {
  if (!property) return null;

  return (
    <HostContainer>
      <div className="header">
        <img src={property.host?.profilePicture ? `${BACKEND_URL}${property.host.profilePicture}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="host profile picture" className="host-profile-pic" />
        <div className="host-titles">
          <BookingTitle className="host-title">Hosted by {property.host.firstName}</BookingTitle>
          <BookingSubtitle className="host-subtitle">Joined january 2025</BookingSubtitle>
        </div>
      </div>
      <div className="title-list">
        <GoStarFill className="icon" />  <BookingSubtitle className="list-subtitle">320 Reviews</BookingSubtitle>
        <FaCheckCircle className="icon" /> <BookingSubtitle className="list-subtitle">Identity verified</BookingSubtitle>
        <FaMedal className="icon" />  <BookingSubtitle className="list-subtitle">superhost</BookingSubtitle>
      </div>
      <div className="body">
        <BookingSubtitle className="body-title">{property.host.firstName} is a super host</BookingSubtitle>
        <BookingSubtitle className="body-subtitle">Super hosts are experienced, highly rated hosts who are commited to providing great stays for guests. </BookingSubtitle>
        <BookingSubtitle className="body-subtitle">Response rate: 100%</BookingSubtitle>
        <BookingSubtitle className="body-subtitle">Response time: within an hour</BookingSubtitle>
        <PillButton className="body-btn">Contact the host</PillButton>
      </div>
    </HostContainer>
  )
}

export default HostDisplayContainer