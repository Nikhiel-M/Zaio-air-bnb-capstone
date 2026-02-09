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
import { bookingsAPI, authAPI } from "../../services/api";

const BookingPayment = ({ property }) => {
  if (!property) return null;

  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const maxGuests = property.maxGuests || 1;

  const nights = checkIn && checkOut ? Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) : 0;
  const subtotal = nights * (property.pricePerNight ?? 0);
  const cleaningFee = 50;
  const serviceFee = Math.round(subtotal * 0.03);
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal + cleaningFee + serviceFee + taxes;

  const handleReserve = async () => {
    if (!localStorage.getItem('token')) {
      alert('Please log in before making a reservation');
      return;
    }
    if (!checkIn || !checkOut || nights <= 0) {
      alert('Please select valid check-in and check-out dates.');
      return;
    }
    try {
      const user = await authAPI.getCurrentUser();
      const bookingData = {
        propertyId: property._id,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        numberOfGuests: guests,
        totalPrice: total,
      };
      await bookingsAPI.createBooking(bookingData);
      alert('Booking created successfully!');
    } catch (error) {
      alert('Error creating booking: ' + error.message);
    }
  };

  return (
    <BookingPaymentContainer>
      <BookingPaymentHeader>
        <BookingTitle className="title">
          $ {property.pricePerNight ?? 0} / night pp{" "}
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
            <Form.Control type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </BookingCheckIn>

          <BookingCheckOut>
            <h5 className="check">CHECK-OUT </h5> <br />
            <Form.Control type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
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
      <PillButton className="reserve-button" onClick={handleReserve}>Reserve</PillButton>
      <BookingSubtitle className="guests-subtitle">
        you won't be charged yet
      </BookingSubtitle>
      <GuestsPayment nights={nights} pricePerNight={property.pricePerNight ?? 0} guests={guests} />
    </BookingPaymentContainer>
  );
};

export default BookingPayment;
