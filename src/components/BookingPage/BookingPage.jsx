import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookingPageContainer, HeaderContainer, ImageContainer, SubheaderContainer, SubImageContainer } from './BookingPage.styled';
import {Title ,Subtitle } from '../../Styles/General.styled'
import { GiShare } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import BookingPayment from '../BookingPayment/BookingPayment';



const API_BASE = import.meta.env?.VITE_API_URL || "http://localhost:5000";

const BookingPage = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/properties/${propertyId}`);
        const data = await res.json();

        if (!res.ok || !data.property) {
          return navigate("/");
        }

        setProperty(data.property);
      } catch (err) {
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchProperty();
    } else {
      setLoading(false);
    }
  }, [propertyId, navigate]);

  if (loading) return <div>Loading booking page...</div>;

  return (
    <BookingPageContainer>
      <HeaderContainer>
        <Title className='title'>{property.title}</Title>
        <SubheaderContainer>
          <Subtitle className='subtitle'><GoStarFill /> {property.rating.average} ({property.rating.count} reviews) - {property.address.state} </Subtitle>
          <div className='ShareSection'>
          <Subtitle className='subtitle'><GiShare /> Share</Subtitle>
          <Subtitle className='subtitle'><FaHeart /> Save</Subtitle>
          </div>
        </SubheaderContainer>
      </HeaderContainer>

      <ImageContainer>
        <img src={property.images[0].url} alt={property.title} className='main-image'/> 
        <SubImageContainer>
        <img src={property.images[1].url} alt={property.title} className='sub-image'/>
        <img src={property.images[1].url} alt={property.title} className='sub-image'/>
        <img src={property.images[1].url} alt={property.title} className='sub-image'/>
        <img src={property.images[1].url} alt={property.title} className='sub-image'/>

        </SubImageContainer>
      </ImageContainer>

      <BookingPayment property={property} />
      
    </BookingPageContainer>
  );
};

export default BookingPage;