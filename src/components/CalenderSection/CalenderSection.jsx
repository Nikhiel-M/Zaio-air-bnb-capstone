import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  CalenderContainer,
  DateContainer,
  CalendarModal,
  GuestDropdownModal,
  GuestSection,
  GuestRow,
  GuestInfo,
  GuestControls,
  GuestButton,
  GuestCount,
  DoneButton,
  DoneButtonContainer,
} from "./CalenderSection.styled";
import { FaSearch } from "react-icons/fa";
import CalendarComponent from "../Calandar/Calendar";
import { locationsAPI } from "../../services/api";
import { useNavigate } from "react-router-dom";

const CalenderSection = () => {
  const [modals, setModals] = useState({
    checkin: false,
    checkout: false,
    guests: false,
    location: false,
  });
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("All countries");
  const [countries, setCountries] = useState([]);
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });

  const navigate = useNavigate();
  const containerRef = useRef(null);
  const modalRefs = useRef({
    checkin: null,
    checkout: null,
    guests: null,
    location: null,
  });

  // Toggle modal and close others
  const toggleModal = useCallback((modalName) => {
    setModals((prev) => ({
      checkin: false,
      checkout: false,
      guests: false,
      location: false,
      [modalName]: !prev[modalName],
    }));
  }, []);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setModals({ checkin: false, checkout: false, guests: false, location: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await locationsAPI.getAllLocations();
        const uniqueCountries = [...new Set(response.data.map((loc) => loc.country))].sort();
        setCountries(uniqueCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Date handlers
  const handleCheckinDateSelect = (date) => {
    setCheckinDate(date);
    toggleModal("checkin");
    if (checkoutDate && new Date(checkoutDate) <= new Date(date)) {
      setCheckoutDate(null);
    }
  };

  const handleCheckoutDateSelect = (date) => {
    if (checkinDate && new Date(date) > new Date(checkinDate)) {
      setCheckoutDate(date);
      toggleModal("checkout");
    }
  };

  // Guest handlers
  const updateGuestCount = (type, operation) => {
    const limits = { adults: 16, children: 5, infants: 5 };
    setGuests((prev) => {
      const newGuests = { ...prev };
      const current = newGuests[type];
      const max = limits[type];
      const min = type === "adults" ? 1 : 0;

      if (operation === "increment" && current < max) newGuests[type]++;
      if (operation === "decrement" && current > min) newGuests[type]--;

      return newGuests;
    });
  };

  const getTotalGuests = () => guests.adults + guests.children;

  const getGuestText = () => {
    const total = getTotalGuests();
    let text = `${total} guest${total !== 1 ? "s" : ""}`;
    if (guests.infants > 0) {
      text += `, ${guests.infants} infant${guests.infants !== 1 ? "s" : ""}`;
    }
    return text;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Select date";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    toggleModal("location");
    const route = country === "All countries" ? "/locations" : `/locations?country=${encodeURIComponent(country)}`;
    navigate(route);
  };

  // Guest section component
  const GuestTypeRow = ({ type, label, ageText, min = 0, max }) => (
    <GuestSection>
      <GuestRow>
        <GuestInfo>
          <h3>{label}</h3>
          <p>{ageText}</p>
        </GuestInfo>
        <GuestControls>
          <GuestButton
            onClick={(e) => {
              e.stopPropagation();
              updateGuestCount(type, "decrement");
            }}
            disabled={guests[type] <= min}
          >
            -
          </GuestButton>
          <GuestCount>{guests[type]}</GuestCount>
          <GuestButton
            onClick={(e) => {
              e.stopPropagation();
              updateGuestCount(type, "increment");
            }}
            disabled={guests[type] >= max}
          >
            +
          </GuestButton>
        </GuestControls>
      </GuestRow>
    </GuestSection>
  );

  return (
    <CalenderContainer ref={containerRef}>
      {/* Locations */}
      <DateContainer>
        <h3 className="calender-title">Locations</h3>
        <h2 className="subtitle" onClick={() => toggleModal("location")}>
          {selectedCountry}
        </h2>
        {modals.location && (
          <GuestDropdownModal ref={(el) => (modalRefs.current.location = el)}>
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
                onClick={() => handleCountrySelect("All countries")}
              >
                All countries
              </div>
              {countries.map((country) => (
                <div
                  key={country}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #ddd",
                  }}
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </div>
              ))}
            </div>
          </GuestDropdownModal>
        )}
      </DateContainer>

      {/* Check-in */}
      <DateContainer>
        <h3 className="calender-title">Check-in</h3>
        <h2 className="subtitle" onClick={() => toggleModal("checkin")}>
          {formatDate(checkinDate)}
        </h2>
        {modals.checkin && (
          <CalendarModal ref={(el) => (modalRefs.current.checkin = el)}>
            <CalendarComponent onDateSelect={handleCheckinDateSelect} />
          </CalendarModal>
        )}
      </DateContainer>

      {/* Check-out */}
      <DateContainer>
        <h3 className="calender-title">Check-out</h3>
        <h2 className="subtitle" onClick={() => toggleModal("checkout")}>
          {formatDate(checkoutDate)}
        </h2>
        {modals.checkout && (
          <CalendarModal ref={(el) => (modalRefs.current.checkout = el)}>
            <CalendarComponent
              onDateSelect={handleCheckoutDateSelect}
              minDate={checkinDate}
              isCheckout={true}
            />
          </CalendarModal>
        )}
      </DateContainer>

      {/* Guests */}
      <DateContainer>
        <h3 className="calender-title">Guests</h3>
        <h2 className="subtitle" onClick={() => toggleModal("guests")}>
          {getGuestText()}
        </h2>
        {modals.guests && (
          <GuestDropdownModal ref={(el) => (modalRefs.current.guests = el)}>
            <GuestTypeRow
              type="adults"
              label="Adults"
              ageText="Ages 13 or above"
              min={1}
              max={16}
            />
            <GuestTypeRow
              type="children"
              label="Children"
              ageText="Ages 2-12"
              min={0}
              max={5}
            />
            <GuestTypeRow
              type="infants"
              label="Infants"
              ageText="Under 2"
              min={0}
              max={5}
            />
            <DoneButtonContainer>
              <DoneButton
                onClick={(e) => {
                  e.stopPropagation();
                  toggleModal("guests");
                }}
              >
                Done
              </DoneButton>
            </DoneButtonContainer>
          </GuestDropdownModal>
        )}
      </DateContainer>

      <FaSearch className="search-icon" />
    </CalenderContainer>
  );
};

export default CalenderSection;
