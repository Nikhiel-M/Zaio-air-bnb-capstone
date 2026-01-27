import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../services/api";
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
  ReviewSection,
  ReviewProfiles,
  HostContainer,
  RulesAndSafety,
  RulesSubtitle
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
import CalendarComponent from "../../components/Calandar/Calendar";
import ProgressBar from "../../components/GeneralComponents/ProgressBar/ProgressBar";
import ReviewProfile from "../../components/GeneralComponents/ReviewProfile/ReviewProfile";
import { PillButton } from "../../components/Buttons/PillButton.styled";

const API_BASE = import.meta.env?.VITE_API_URL;

const BACKEND_URL = API_BASE_URL.replace('/api', '');

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
          src={property.images?.[0]?.url || null}
          alt={property.title}
          className="main-image"
        />
        <SubImageContainer>
          <img
            src={property.images?.[1]?.url || null}
            alt={property.title}
            className="sub-image"
          />
          <img
            src={property.images?.[2]?.url || null}
            alt={property.title}
            className="sub-image"
          />
          <img
            src={property.images?.[3]?.url || null}
            alt={property.title}
            className="sub-image"
          />
          <img
            src={property.images?.[4]?.url || null}
            alt={property.title}
            className="sub-image"
          />
        </SubImageContainer>
      </ImageContainer>

      <PaymentContainer>
        <InformationContainer>
          <div className="alignmentBox">
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
                  <BookingSubtitle>
                    The host commited to Airbnb's 5-step enhanced cleaning
                    process.
                  </BookingSubtitle>

                  <BookingTitle>
                    <MdOutlineDoorFront /> Self Check-in
                  </BookingTitle>
                  <BookingSubtitle>
                    Check in yourself with the keypad.
                  </BookingSubtitle>

                  <BookingTitle>
                    <FaRegCalendar /> Flexible Cancellation
                  </BookingTitle>
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

          <InformationFooter>
            <CalendarContainer>
              <BookingSubtitle>
                {" "}
                Nights in {property.address.state}
              </BookingSubtitle>
              <div className="Calendars">
                <CalendarComponent />
                <CalendarComponent />
              </div>
            </CalendarContainer>
          </InformationFooter>

          <BookingTitle>Reviews</BookingTitle>
          <ReviewSection>
            <div className="reviewContainer">
              Cleanliness
              <ProgressBar
                value={80}
                ariaLabel="cleanliness"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Communication
              <ProgressBar
                value={75}
                ariaLabel="commmunication"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Check-in
              <ProgressBar
                value={55}
                ariaLabel="check-in"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Accuracy
              <ProgressBar
                value={80}
                ariaLabel="Accuracy"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Location
              <ProgressBar
                value={75}
                ariaLabel="Location"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Value
              <ProgressBar
                value={55}
                ariaLabel="Value"
                className="progressBar"
              />
            </div>
          </ReviewSection>

          <ReviewProfiles>
          <ReviewProfile
            img={
              "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
            }
            reviewName={"Andy Rand"}
            reviewDate={"January 2024"}
            reviewTxt={"Great place! Exactly as described and very clean. Check-in was smooth and the host was friendly and responsive. Would definitely stay again."}
          />
          <ReviewProfile
            img={
              "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            }
            reviewName={"Paul Smith"}
            reviewDate={"July 2025"}
            reviewTxt={"Perfect location and a comfortable stay. The apartment had everything we needed for a short trip. Highly recommend!"}
          />
          <ReviewProfile
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJtogP2fBCv9F41ncZeh4sl-gKz2nEztr_Q&s"
            }
            reviewName={"Sarah Mitchell"}
            reviewDate={"February 2025"}
            reviewTxt={"Lovely home with a cozy atmosphere. The host provided clear instructions and was quick to answer any questions. We enjoyed our stay."}
          />
          <ReviewProfile
            img={
              "https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_640.jpg"
            }
            reviewName={"Michael Knight"}
            reviewDate={"June 2025"}
            reviewTxt={"Really nice space — quiet, tidy, and well-equipped. Close to shops and restaurants. Would book again for sure."}
          />
          <ReviewProfile
            img={
              "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            }
            reviewName={"Chloe Walters"}
            reviewDate={"September 2025"}
            reviewTxt={"Fantastic stay! The place was spotless and the bed was super comfortable. Host made everything easy. Five stars!"}
          />
          <ReviewProfile
            img={
              "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            }
            reviewName={"Megan Foster"}
            reviewDate={"November 2025"}
            reviewTxt={"Great value for the price. The area felt safe, and the amenities were exactly what we expected. Enjoyed every moment."}
          />
          </ReviewProfiles>

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

          <RulesAndSafety>
            <div className="rules">
              <BookingTitle className="rules-title">House Rules</BookingTitle>
              <RulesSubtitle>• Check-in: After 4:00PM</RulesSubtitle>
              <RulesSubtitle>• Check-out: 10:00AM</RulesSubtitle>
              <RulesSubtitle>• Self check-in with lock-box</RulesSubtitle>
              <RulesSubtitle>• Not suitable for infants(under 2 years)</RulesSubtitle>
              <RulesSubtitle>• No smocking</RulesSubtitle>
              <RulesSubtitle>• No pets</RulesSubtitle>
              <RulesSubtitle>• No parties or events</RulesSubtitle>
            </div>
            <div className="safety">
               <BookingTitle className="rules-title">Health & Safety</BookingTitle>
              <RulesSubtitle>• Commited to Airbnb's enhanced cleaning process</RulesSubtitle>
              <RulesSubtitle>• Airbnb's social-distancing and other COVID-19-related gudelines apply </RulesSubtitle>
              <RulesSubtitle>• Carbon monoxide alarm</RulesSubtitle>
              <RulesSubtitle>• Smoke alarm</RulesSubtitle>
              <RulesSubtitle>• Security Deposit - if you damage the home, you may be charged up to $566</RulesSubtitle>
            </div>
            <div className="cancel">
              <BookingTitle className="rules-title">Cancellation Policy</BookingTitle>
              <RulesSubtitle>• Free cancellation</RulesSubtitle>
            </div>
          </RulesAndSafety>
        </InformationContainer>
      </PaymentContainer>
    </BookingPageContainer>
  );
};

export default BookingPage;
