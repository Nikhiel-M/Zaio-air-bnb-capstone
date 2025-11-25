import React, { useState, useRef, useEffect } from 'react'
import {
  BookingContainer,
  BookingCalendarContainer,
  BookingPaymentContainer,
  BookingPaymentHeader,
  BookingCheckIn,
  BookingCheckOut,
  BookingGuests,
  GuestsDropdown,
  DropdownButton,
  DropdownList,
  DropdownItem
} from './BookingPayment.styled'
import { Title, Subtitle } from '../../Styles/General.styled'
import { GoStarFill } from "react-icons/go";
import GuestsSelector from '../GeneralComponents/GuestsSelector/GuestsSelector';



const BookingPayment = ({ property }) => {
  if (!property) return null;

  const [guests, setGuests] = useState(1);
  const maxGuests = property.maxGuests || 1;

  return (
    <BookingPaymentContainer>
      <BookingPaymentHeader>
        <Title className='title'>$ {property.pricePerNight ?? 0} / night </Title>
        <Subtitle className='subtitle'><GoStarFill /> {property.rating?.average ?? 0} ({property.rating?.count ?? 0} reviews) - {property.address?.state || ''} </Subtitle>
      </BookingPaymentHeader>

      <BookingContainer>
        <BookingCalendarContainer>
          <BookingCheckIn>CHECK-IN</BookingCheckIn>
          <BookingCheckOut>CHECK-OUT</BookingCheckOut>
        </BookingCalendarContainer>

        <BookingGuests>
          GUESTS
          <GuestsDropdown>
            <GuestsSelector max={maxGuests} value={guests} onChange={setGuests} />
          </GuestsDropdown>
        </BookingGuests>
      </BookingContainer>
    </BookingPaymentContainer>
  )
}

export default BookingPayment