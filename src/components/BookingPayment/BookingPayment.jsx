import React, { useState, useRef, useEffect } from "react";
import {
  BookingContainer,
  BookingCalendarContainer,
  BookingPaymentContainer,
  BookingPaymentHeader,
  BookingCheckIn,
  BookingCheckOut,
  BookingGuests,
  GuestsDropdown,
  BookingTitle,
  BookingSubtitle,
} from "./BookingPayment.styled";
import { GoStarFill } from "react-icons/go";
import GuestsSelector from "../GeneralComponents/GuestsSelector/GuestsSelector";
import { PillButton } from "../Buttons/PillButton.styled";
import GuestsPayment from "../GeneralComponents/GuestsPayment/GuestsPayment";
import { Form } from "react-bootstrap";

const BookingPayment = ({ property }) => {
  if (!property) return null;

  const [guests, setGuests] = useState(1);
  const maxGuests = property.maxGuests || 1;

  return (
    <BookingPaymentContainer>
      <BookingPaymentHeader>
        <BookingTitle className="title">
          $ {property.pricePerNight ?? 0} / night{" "}
        </BookingTitle>
        <BookingSubtitle>
          <GoStarFill /> {property.rating?.average ?? 0} (
          {property.rating?.count ?? 0} ){" "}
        </BookingSubtitle>
      </BookingPaymentHeader>

      <BookingContainer>
        <BookingCalendarContainer>
          <BookingCheckIn>
            <h5 className="check">CHECK-IN</h5> <br />
            <Form.Control type="date" />
          </BookingCheckIn>

          <BookingCheckOut>
            <h5 className="check">CHECK-OUT </h5> <br />
            <Form.Control type="date" />
          </BookingCheckOut>
        </BookingCalendarContainer>

        <BookingGuests>
          GUESTS
          <GuestsDropdown>
            <GuestsSelector
              max={maxGuests}
              value={guests}
              onChange={setGuests}
            />
          </GuestsDropdown>
        </BookingGuests>
      </BookingContainer>
      <PillButton className="reserve-button">Reserve</PillButton>
      <BookingSubtitle className="guests-subtitle">
        you won't be charged yet
      </BookingSubtitle>
      <GuestsPayment property={property} />
    </BookingPaymentContainer>
  );
};

export default BookingPayment;
