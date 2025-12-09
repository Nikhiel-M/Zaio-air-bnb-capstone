import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BookingPageContainer,
  HeaderContainer,
  ImageContainer,
  InformationBody,
  InformationContainer,
  InformationFooter,
  InformationHeader,
  PaymentContainer,
  SubheaderContainer,
  SubImageContainer,
  BookingTitle,
  BookingSubtitle,
  OffersContainer,
  OffersGrid,
  CalendarContainer,
  ReviewSection
} from "./BookingPage.styled";
import { GiShare } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import BookingPayment from "../BookingPayment/BookingPayment";
import { LuHouse } from "react-icons/lu";
import { WiStars } from "react-icons/wi";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import CalendarComponent from "../Calandar/Calendar";
import ProgressBar from "../GeneralComponents/ProgressBar/ProgressBar";

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
        <BookingTitle className="title">{property.title}</BookingTitle>
        <SubheaderContainer>
          <BookingSubtitle className="subtitle">
            <GoStarFill /> {property.rating.average} ({property.rating.count}{" "}
            reviews) - {property.address.state}{" "}
          </BookingSubtitle>
          <div className="ShareSection">
            <BookingSubtitle className="subtitle">
              <GiShare /> Share
            </BookingSubtitle>
            <BookingSubtitle className="subtitle">
              <FaHeart /> Save
            </BookingSubtitle>
          </div>
        </SubheaderContainer>
      </HeaderContainer>

      <ImageContainer>
        <img
          src={property.images[0].url}
          alt={property.title}
          className="main-image"
        />
        <SubImageContainer>
          <img
            src={property.images[1].url}
            alt={property.title}
            className="sub-image"
          />
          <img
            src={property.images[1].url}
            alt={property.title}
            className="sub-image"
          />
          <img
            src={property.images[1].url}
            alt={property.title}
            className="sub-image"
          />
          <img
            src={property.images[1].url}
            alt={property.title}
            className="sub-image"
          />
        </SubImageContainer>
      </ImageContainer>

      <PaymentContainer>
        <InformationContainer>
          <div className="alignmentBox" >
          <div className="informationBox">
          <InformationHeader>
            <BookingTitle>
              {property.propertyType} hosted by {property.host.firstName}
            </BookingTitle>
            <BookingSubtitle>
              {property.maxGuests} Guests • {property.propertyType} •{" "}
              {property.bedrooms} Bedrooms •{" "}
              {((property) => {
                const bathrooms = property.bathrooms ?? 0;
                const text = bathrooms === 1 ? "Bathroom" : "Bathrooms";
                return `${bathrooms} ${text}`;
              })(property)}
            </BookingSubtitle>
          </InformationHeader>
          <InformationBody>
            <div className="titles-container">
            <BookingTitle>
              <LuHouse /> {property.roomType}
            </BookingTitle>
            <BookingSubtitle>{property.description}</BookingSubtitle>

            <BookingTitle>
              <WiStars /> Enhanced Cleaning:
            </BookingTitle>
            <BookingSubtitle>The host commited to Airbnb's 5-step enhanced cleaning process.</BookingSubtitle>

            <BookingTitle>
              <MdOutlineDoorFront /> Self Check-in
            </BookingTitle>
            <BookingSubtitle>Check in yourself with the keypad.</BookingSubtitle>

            <BookingTitle>
              <FaRegCalendar /> Flexible Cancellation
            </BookingTitle>
            </div>
          </InformationBody>
          </div>
          <BookingPayment property={property} />
          </div>
          <BookingSubtitle className="longDescription">{property.long_description}</BookingSubtitle>
          <OffersContainer>
            <BookingSubtitle className="offersHeader">What this place offers</BookingSubtitle>
            <OffersGrid>
            {property.amenities.map((amenity) => (
              <BookingSubtitle className="amenity" key={amenity}><BsDot />{amenity}</BookingSubtitle>
            ))}
            </OffersGrid>
          </OffersContainer>
          <InformationFooter>
            <CalendarContainer>
            <BookingSubtitle> Nights in {property.address.state}</BookingSubtitle>
            <div className="Calendars">
            <CalendarComponent />
            <CalendarComponent />
            </div>
            </CalendarContainer>
          </InformationFooter>
            <ReviewSection>
              <div className="reviewContainer">
                Cleanliness
                <ProgressBar value={80}  ariaLabel="cleanliness" className="progressBar"/> 
              </div>
              <div className="reviewContainer">
                Communication
                <ProgressBar value={75} ariaLabel="commmunication" className="progressBar"/>
              </div>
              <div className="reviewContainer">
                Check-in
                <ProgressBar value={55}  ariaLabel="check-in" className="progressBar" />
              </div>

                <div className="reviewContainer">
                Accuracy
                <ProgressBar value={80}  ariaLabel="Accuracy" className="progressBar"/>
              </div>
              <div className="reviewContainer">
                Location
                <ProgressBar value={75} ariaLabel="Location" className="progressBar"/>
              </div>
              <div className="reviewContainer">
                Value
                <ProgressBar value={55}  ariaLabel="Value" className="progressBar" />
              </div>
            </ReviewSection>
        </InformationContainer>
      </PaymentContainer>
    </BookingPageContainer>
  );
};

export default BookingPage;
