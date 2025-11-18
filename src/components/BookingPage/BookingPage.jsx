import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookingPageContainer } from './BookingPage.styled';

const BookingPage = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (propertyId) {
      fetchPropertyDetails();
    } else {
      setLoading(false);
    }
  }, [propertyId]);

  const fetchPropertyDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/properties/${propertyId}`);
      const data = await response.json();
      
      if (data.property) {
        setProperty(data.property);
      } else {
        console.error('Property not found');
        navigate('/'); // Redirect to home if property not found
      }
    } catch (error) {
      console.error('Error fetching property:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading booking page...</div>;
  }

  return (
  <BookingPageContainer>
    <h1>Booking page</h1>
  </BookingPageContainer>
  );
};

export default BookingPage;