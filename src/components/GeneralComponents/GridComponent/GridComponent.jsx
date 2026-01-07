import React, { useState, useEffect } from "react";
import {
  GridContainer,
  GridItem,
  GridTitle,
  GridText
} from "./GridComponent.styled";
import { bookingsAPI } from "../../../services/api";

const GridComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await bookingsAPI.getMyBookings();
      setBookings(response.bookings || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        await bookingsAPI.cancelBooking(bookingId, "Cancelled by user");
        // Refresh the bookings list
        fetchBookings();
        alert("Booking cancelled successfully");
      } catch (err) {
        alert("Error cancelling booking: " + err.message);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  if (loading) {
    return <GridContainer>Loading your reservations...</GridContainer>;
  }

  if (error) {
    return <GridContainer>Error loading reservations: {error}</GridContainer>;
  }

  if (bookings.length === 0) {
    return <GridContainer>No reservations found.</GridContainer>;
  }

  return (
    <GridContainer>
      <table className="table">
        <thead>
          <tr>
            <GridTitle>Booked by</GridTitle>
            <GridTitle>Property Name</GridTitle>
            <GridTitle>Check-in date</GridTitle>
            <GridTitle>Check-out date</GridTitle>
            <GridTitle>Actions</GridTitle>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <GridItem>
                <GridText>{booking.guest?.firstName} {booking.guest?.lastName}</GridText>
              </GridItem>
              <GridItem>
                <GridText>{booking.property?.title}</GridText>
              </GridItem>
              <GridItem>
                <GridText>{formatDate(booking.checkInDate)}</GridText>
              </GridItem>
              <GridItem>
                <GridText>{formatDate(booking.checkOutDate)}</GridText>
              </GridItem>
              <GridItem>
                <button
                  className="cancel"
                  onClick={() => handleCancelBooking(booking._id)}
                >
                  Cancel
                </button>
              </GridItem>
            </tr>
          ))}
        </tbody>
      </table>
    </GridContainer>
  );
};

export default GridComponent;
