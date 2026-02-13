import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../services/api";
import {
  BookingPageContainer,
  HeaderContainer,
  ImageContainer,
  InformationBody,
  InformationContainer,
  // InformationFooter,ws
  InformationHeader,
  PaymentContainer,
  SubheaderContainer,
  SubImageContainer,
  BookingTitle,
  BookingSubtitle,
  OffersContainer,
  OffersGrid,
  // CalendarContainer,
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalClose,
  ModalNav,
} from "./BookingPage.styled";
import { GiShare } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import BookingPayment from "../../components/BookingPayment/BookingPayment";
import { LuHouse } from "react-icons/lu";
import { WiStars } from "react-icons/wi";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaRegCalendar, FaCheckCircle, FaMedal } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
// import CalendarComponent from "../../components/Calandar/Calendar";
import ReviewBarSection from "./BookingPageComponents/ReviewSection/ReviewSection";
import ReviewProfiles from "./BookingPageComponents/ReviewProfiles/ReviewProfiles";
import HostDisplayContainer from "./BookingPageComponents/HostContainer/HostContainer";
import RulesAndSafetyContainer from "./BookingPageComponents/Rules&Safety/RulesAndSafety";

const API_BASE = import.meta.env?.VITE_API_URL;

const BACKEND_URL = API_BASE_URL.replace("/api", "");

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

  const images = property?.images?.map((img) => img.url).filter(Boolean) || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImage = (index) => {
    if (!images.length) return;
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrev = () =>
    setSelectedIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setSelectedIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, images.length]);

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
          src={property.images?.[0]?.url || null}
          alt={property.title}
          className="main-image"
          onClick={() => openImage(0)}
          style={{ cursor: "pointer" }}
        />
        <SubImageContainer>
          {property.images?.slice(1, 5).map((img, idx) => (
            <img
              key={idx}
              src={img?.url || null}
              alt={property.title}
              className="sub-image"
              onClick={() => openImage(idx + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </SubImageContainer>
      </ImageContainer>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage
              src={images[selectedIndex]}
              alt={`${property.title} - image ${selectedIndex + 1}`}
            />
            <ModalClose onClick={closeModal} aria-label="Close image">
              ×
            </ModalClose>

            {images.length > 1 && (
              <>
                <ModalNav
                  className="left"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </ModalNav>

                <ModalNav
                  className="right"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                >
                  ›
                </ModalNav>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}

      <PaymentContainer>
        <InformationContainer>
          <div className="alignmentBox">
            <div className="informationBox">
              <InformationHeader>
                <BookingTitle className="information-header-title">
                  {property.propertyType} hosted by {property.host.firstName}
                </BookingTitle>
                <BookingSubtitle className="information-header-subtitle">
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
                  <BookingTitle className="information-body-title">
                    <LuHouse /> {property.roomType}
                  </BookingTitle>
                  <BookingSubtitle className="information-body-subtitle">
                    {property.description}
                  </BookingSubtitle>

                  <BookingTitle className="information-body-title">
                    <WiStars /> Enhanced Cleaning:
                  </BookingTitle>
                  <BookingSubtitle className="information-body-subtitle">
                    The host committed to Airbnb's 5-step enhanced cleaning
                    process.
                  </BookingSubtitle>

                  <BookingTitle className="information-body-title">
                    <MdOutlineDoorFront /> Self Check-in
                  </BookingTitle>
                  <BookingSubtitle className="information-body-subtitle">
                    Check in yourself with the keypad.
                  </BookingSubtitle>

                  <BookingTitle className="information-body-title">
                    <FaRegCalendar /> Cancellation Policy
                  </BookingTitle>
                  <BookingSubtitle className="information-body-subtitle">
                    Flexible Cancellation
                  </BookingSubtitle>
                </div>
              </InformationBody>
            </div>
            <BookingPayment property={property} />
          </div>

          <BookingSubtitle className="longDescription">
            {property.long_description}
          </BookingSubtitle>

          <OffersContainer>
            <BookingSubtitle className="offersHeader">
              What this place offers
            </BookingSubtitle>

            <OffersGrid>
              {property.amenities.map((amenity) => (
                <BookingSubtitle className="amenity" key={amenity}>
                  <BsDot />
                  {amenity}
                </BookingSubtitle>
              ))}
            </OffersGrid>
          </OffersContainer>

          <BookingTitle className="review-title">Reviews</BookingTitle>

          <ReviewBarSection />

          <ReviewProfiles />

          <HostDisplayContainer property={property} />

          <RulesAndSafetyContainer />
        </InformationContainer>
      </PaymentContainer>
    </BookingPageContainer>
  );
};

export default BookingPage;
