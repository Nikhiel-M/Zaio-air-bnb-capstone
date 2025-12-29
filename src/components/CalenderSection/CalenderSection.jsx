import React from "react";
import { useState, useEffect, useRef } from "react";
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

const CalenderSection = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCheckoutCalendarOpen, setIsCheckoutCalendarOpen] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  // Refs for detecting clicks outside
  const calendarRef = useRef(null);
  const checkoutCalendarRef = useRef(null);
  const guestDropdownRef = useRef(null);
  const containerRef = useRef(null);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the main container
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        // Check each modal individually
        const isOutsideCheckinCalendar =
          calendarRef.current && !calendarRef.current.contains(event.target);
        const isOutsideCheckoutCalendar =
          checkoutCalendarRef.current &&
          !checkoutCalendarRef.current.contains(event.target);
        const isOutsideGuestDropdown =
          guestDropdownRef.current &&
          !guestDropdownRef.current.contains(event.target);

        if (isCalendarOpen && isOutsideCheckinCalendar) {
          setIsCalendarOpen(false);
        }
        if (isCheckoutCalendarOpen && isOutsideCheckoutCalendar) {
          setIsCheckoutCalendarOpen(false);
        }
        if (isGuestDropdownOpen && isOutsideGuestDropdown) {
          setIsGuestDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen, isCheckoutCalendarOpen, isGuestDropdownOpen]);

  const toggleCheckinCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);

    if (isCheckoutCalendarOpen) setIsCheckoutCalendarOpen(false);
    if (isGuestDropdownOpen) setIsGuestDropdownOpen(false);
  };

  const toggleCheckoutCalendar = () => {
    setIsCheckoutCalendarOpen(!isCheckoutCalendarOpen);

    if (isCalendarOpen) setIsCalendarOpen(false);
    if (isGuestDropdownOpen) setIsGuestDropdownOpen(false);
  };

  const toggleGuestDropdown = () => {
    setIsGuestDropdownOpen(!isGuestDropdownOpen);

    if (isCalendarOpen) setIsCalendarOpen(false);
    if (isCheckoutCalendarOpen) setIsCheckoutCalendarOpen(false);
  };

  const handleCheckinDateSelect = (date) => {
    setCheckinDate(date);
    setIsCalendarOpen(false);

    if (checkoutDate && new Date(checkoutDate) <= new Date(date)) {
      setCheckoutDate(null);
    }
  };

  const handleCheckoutDateSelect = (date) => {
    if (checkinDate && new Date(date) > new Date(checkinDate)) {
      setCheckoutDate(date);
      setIsCheckoutCalendarOpen(false);
    }
  };

  const updateGuestCount = (type, operation) => {
    setGuests((prev) => {
      const newGuests = { ...prev };
      if (operation === "increment") {
        if (type === "adults" && newGuests.adults < 16) newGuests.adults++;
        if (type === "children" && newGuests.children < 5) newGuests.children++;
        if (type === "infants" && newGuests.infants < 5) newGuests.infants++;
      } else if (operation === "decrement") {
        if (type === "adults" && newGuests.adults > 1) newGuests.adults--;
        if (type === "children" && newGuests.children > 0) newGuests.children--;
        if (type === "infants" && newGuests.infants > 0) newGuests.infants--;
      }
      return newGuests;
    });
  };

  const getTotalGuests = () => {
    return guests.adults + guests.children;
  };

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
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <CalenderContainer ref={containerRef}>
        <DateContainer>
          <h3 className="calender-title"> Locations </h3>
          <a href="/locations" className="locations"><h2 className="subtitle">Select a location</h2></a>
        </DateContainer>

        <DateContainer>
          <h3 className="calender-title"> Check-in </h3>
          <h2 className="subtitle" onClick={toggleCheckinCalendar}>
            {formatDate(checkinDate)}
          </h2>

          {isCalendarOpen && (
            <CalendarModal
              ref={calendarRef}
              onClick={(e) => e.stopPropagation()}
            >
              <CalendarComponent onDateSelect={handleCheckinDateSelect} />
            </CalendarModal>
          )}
        </DateContainer>

        <DateContainer>
          <h3 className="calender-title"> Check-out </h3>
          <h2 className="subtitle" onClick={toggleCheckoutCalendar}>
            {formatDate(checkoutDate)}
          </h2>

          {/* Check-out calendar positioned below this container */}
          {isCheckoutCalendarOpen && (
            <CalendarModal
              ref={checkoutCalendarRef}
              onClick={(e) => e.stopPropagation()}
            >
              <CalendarComponent
                onDateSelect={handleCheckoutDateSelect}
                minDate={checkinDate}
                isCheckout={true}
              />
            </CalendarModal>
          )}
        </DateContainer>

        <DateContainer>
          <h3 className="calender-title"> Guests </h3>
          <h2 className="subtitle" onClick={toggleGuestDropdown}>
            {getGuestText()}
          </h2>

          {isGuestDropdownOpen && (
            <GuestDropdownModal
              ref={guestDropdownRef}
              onClick={(e) => e.stopPropagation()}
            >
              <GuestSection>
                <GuestRow>
                  <GuestInfo>
                    <h3>Adults</h3>
                    <p>Ages 13 or above</p>
                  </GuestInfo>
                  <GuestControls>
                    <GuestButton
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount("adults", "decrement");
                      }}
                      disabled={guests.adults <= 1}
                    >
                      -
                    </GuestButton>
                    <GuestCount>{guests.adults}</GuestCount>
                    <GuestButton
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount("adults", "increment");
                      }}
                      disabled={guests.adults >= 16}
                    >
                      +
                    </GuestButton>
                  </GuestControls>
                </GuestRow>
              </GuestSection>

              <GuestSection>
                <GuestRow>
                  <GuestInfo>
                    <h3>Children</h3>
                    <p>Ages 2-12</p>
                  </GuestInfo>
                  <GuestControls>
                    <GuestButton
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount("children", "decrement");
                      }}
                      disabled={guests.children <= 0}
                    >
                      -
                    </GuestButton>
                    <GuestCount>{guests.children}</GuestCount>
                    <GuestButton
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount("children", "increment");
                      }}
                      disabled={guests.children >= 5}
                    >
                      +
                    </GuestButton>
                  </GuestControls>
                </GuestRow>
              </GuestSection>

              <GuestSection>
                <GuestRow>
                  <GuestInfo>
                    <h3>Infants</h3>
                    <p>Under 2</p>
                  </GuestInfo>
                  <GuestControls>
                    <GuestButton
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount("infants", "decrement");
                      }}
                      disabled={guests.infants <= 0}
                    >
                      -
                    </GuestButton>
                    <GuestCount>{guests.infants}</GuestCount>
                    <GuestButton
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount("infants", "increment");
                      }}
                      disabled={guests.infants >= 5}
                    >
                      +
                    </GuestButton>
                  </GuestControls>
                </GuestRow>
              </GuestSection>

              <DoneButtonContainer>
                <DoneButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleGuestDropdown();
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
    </>
  );
};

export default CalenderSection;
