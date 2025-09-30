import React from "react";
import { useState, useEffect, useRef } from "react";
import { CalenderContainer, DateContainer } from "./CalenderSection.styled";
import { FaSearch } from 'react-icons/fa';
import CalendarComponent from '../Calandar/Calendar';

const CalenderSection = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isCheckoutCalendarOpen, setIsCheckoutCalendarOpen] = useState(false);
    const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
    const [checkinDate, setCheckinDate] = useState(null);
    const [checkoutDate, setCheckoutDate] = useState(null);
    const [guests, setGuests] = useState({
      adults: 1,
      children: 0,
      infants: 0
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
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          // Check each modal individually
          const isOutsideCheckinCalendar = calendarRef.current && !calendarRef.current.contains(event.target);
          const isOutsideCheckoutCalendar = checkoutCalendarRef.current && !checkoutCalendarRef.current.contains(event.target);
          const isOutsideGuestDropdown = guestDropdownRef.current && !guestDropdownRef.current.contains(event.target);

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

      // Add event listener
      document.addEventListener('mousedown', handleClickOutside);
      
      // Cleanup
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isCalendarOpen, isCheckoutCalendarOpen, isGuestDropdownOpen]);
    
    const toggleCheckinCalendar = () => {
      setIsCalendarOpen(!isCalendarOpen);
      // Close other dropdowns
      if (isCheckoutCalendarOpen) setIsCheckoutCalendarOpen(false);
      if (isGuestDropdownOpen) setIsGuestDropdownOpen(false);
    }
    
    const toggleCheckoutCalendar = () => {
      setIsCheckoutCalendarOpen(!isCheckoutCalendarOpen);
      // Close other dropdowns
      if (isCalendarOpen) setIsCalendarOpen(false);
      if (isGuestDropdownOpen) setIsGuestDropdownOpen(false);
    }
    
    const toggleGuestDropdown = () => {
      setIsGuestDropdownOpen(!isGuestDropdownOpen);
      // Close other dropdowns
      if (isCalendarOpen) setIsCalendarOpen(false);
      if (isCheckoutCalendarOpen) setIsCheckoutCalendarOpen(false);
    }
    
    const handleCheckinDateSelect = (date) => {
      setCheckinDate(date);
      setIsCalendarOpen(false); // Close calendar after selection
      
      // If checkout date is before checkin date, clear it
      if (checkoutDate && new Date(checkoutDate) <= new Date(date)) {
        setCheckoutDate(null);
      }
    }
    
    const handleCheckoutDateSelect = (date) => {
      // Only allow checkout dates after checkin date
      if (checkinDate && new Date(date) > new Date(checkinDate)) {
        setCheckoutDate(date);
        setIsCheckoutCalendarOpen(false); // Close calendar after selection
      }
    }
    
    const updateGuestCount = (type, operation) => {
      setGuests(prev => {
        const newGuests = { ...prev };
        if (operation === 'increment') {
          if (type === 'adults' && newGuests.adults < 16) newGuests.adults++;
          if (type === 'children' && newGuests.children < 5) newGuests.children++;
          if (type === 'infants' && newGuests.infants < 5) newGuests.infants++;
        } else if (operation === 'decrement') {
          if (type === 'adults' && newGuests.adults > 1) newGuests.adults--;
          if (type === 'children' && newGuests.children > 0) newGuests.children--;
          if (type === 'infants' && newGuests.infants > 0) newGuests.infants--;
        }
        return newGuests;
      });
    }
    
    const getTotalGuests = () => {
      return guests.adults + guests.children;
    }
    
    const getGuestText = () => {
      const total = getTotalGuests();
      let text = `${total} guest${total !== 1 ? 's' : ''}`;
      if (guests.infants > 0) {
        text += `, ${guests.infants} infant${guests.infants !== 1 ? 's' : ''}`;
      }
      return text;
    }
    
    const formatDate = (dateString) => {
      if (!dateString) return "Select date";
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric'
      });
    }
    
  return (
    <>
      <CalenderContainer ref={containerRef}>
        <DateContainer> 
          <h1 className="calender-title"> Locations </h1> 
          <h2 className="subtitle">Select a location</h2> 
        </DateContainer>
        
        <DateContainer> 
          <h1 className="calender-title"> Check-in </h1> 
          <h2 className="subtitle" onClick={toggleCheckinCalendar} style={{cursor: 'pointer'}}>
            {formatDate(checkinDate)}
          </h2> 
        </DateContainer>
        
        <DateContainer> 
          <h1 className="calender-title"> Check-out </h1> 
          <h2 className="subtitle" onClick={toggleCheckoutCalendar} style={{cursor: 'pointer'}}>
            {formatDate(checkoutDate)}
          </h2> 
        </DateContainer>
        
        <DateContainer> 
          <h1 className="calender-title"> Guests </h1> 
          <h2 className="subtitle" onClick={toggleGuestDropdown} style={{cursor: 'pointer'}}>
            {getGuestText()}
          </h2>
        </DateContainer>
        
        <FaSearch className="search-icon" />
      </CalenderContainer>
      
      {/* Show calendar when check-in is clicked */}
      {isCalendarOpen && (
        <div 
          ref={calendarRef}
          style={{
            position: 'absolute', 
            zIndex: 1000, 
            top: '100%', 
            left: '50%', 
            transform: 'translateX(-50%)',
            marginTop: '10px'
          }}
        >
          <CalendarComponent onDateSelect={handleCheckinDateSelect} />
        </div>
      )}
      
      {/* Show calendar when check-out is clicked */}
      {isCheckoutCalendarOpen && (
        <div 
          ref={checkoutCalendarRef}
          style={{
            position: 'absolute', 
            zIndex: 1000, 
            top: '100%', 
            left: '50%', 
            transform: 'translateX(-50%)',
            marginTop: '10px'
          }}
        >
          <CalendarComponent 
            onDateSelect={handleCheckoutDateSelect} 
            minDate={checkinDate}
            isCheckout={true}
          />
        </div>
      )}
      
      {/* Guest dropdown */}
      {isGuestDropdownOpen && (
        <div 
          ref={guestDropdownRef}
          style={{
            position: 'absolute', 
            zIndex: 1000, 
            top: '100%', 
            right: '60px',
            marginTop: '10px',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 2px 16px rgba(0, 0, 0, 0.15)',
            minWidth: '320px'
          }}
        >
          <div style={{marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
              <div>
                <h3 style={{margin: '0', fontSize: '16px', fontWeight: '600', color: '#222'}}>Adults</h3>
                <p style={{margin: '0', fontSize: '14px', color: '#717171'}}>Ages 13 or above</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <button 
                  onClick={() => updateGuestCount('adults', 'decrement')}
                  disabled={guests.adults <= 1}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: guests.adults <= 1 ? '#f7f7f7' : 'white',
                    color: guests.adults <= 1 ? '#ccc' : '#222',
                    cursor: guests.adults <= 1 ? 'not-allowed' : 'pointer',
                    fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >-</button>
                <span style={{minWidth: '20px', textAlign: 'center', fontSize: '16px'}}>{guests.adults}</span>
                <button 
                  onClick={() => updateGuestCount('adults', 'increment')}
                  disabled={guests.adults >= 16}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: guests.adults >= 16 ? '#f7f7f7' : 'white',
                    color: guests.adults >= 16 ? '#ccc' : '#222',
                    cursor: guests.adults >= 16 ? 'not-allowed' : 'pointer',
                    fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >+</button>
              </div>
            </div>
          </div>
          
          <div style={{marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
              <div>
                <h3 style={{margin: '0', fontSize: '16px', fontWeight: '600', color: '#222'}}>Children</h3>
                <p style={{margin: '0', fontSize: '14px', color: '#717171'}}>Ages 2-12</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <button 
                  onClick={() => updateGuestCount('children', 'decrement')}
                  disabled={guests.children <= 0}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: guests.children <= 0 ? '#f7f7f7' : 'white',
                    color: guests.children <= 0 ? '#ccc' : '#222',
                    cursor: guests.children <= 0 ? 'not-allowed' : 'pointer',
                    fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >-</button>
                <span style={{minWidth: '20px', textAlign: 'center', fontSize: '16px'}}>{guests.children}</span>
                <button 
                  onClick={() => updateGuestCount('children', 'increment')}
                  disabled={guests.children >= 5}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: guests.children >= 5 ? '#f7f7f7' : 'white',
                    color: guests.children >= 5 ? '#ccc' : '#222',
                    cursor: guests.children >= 5 ? 'not-allowed' : 'pointer',
                    fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >+</button>
              </div>
            </div>
          </div>
          
          <div style={{marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
              <div>
                <h3 style={{margin: '0', fontSize: '16px', fontWeight: '600', color: '#222'}}>Infants</h3>
                <p style={{margin: '0', fontSize: '14px', color: '#717171'}}>Under 2</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <button 
                  onClick={() => updateGuestCount('infants', 'decrement')}
                  disabled={guests.infants <= 0}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: guests.infants <= 0 ? '#f7f7f7' : 'white',
                    color: guests.infants <= 0 ? '#ccc' : '#222',
                    cursor: guests.infants <= 0 ? 'not-allowed' : 'pointer',
                    fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >-</button>
                <span style={{minWidth: '20px', textAlign: 'center', fontSize: '16px'}}>{guests.infants}</span>
                <button 
                  onClick={() => updateGuestCount('infants', 'increment')}
                  disabled={guests.infants >= 5}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: guests.infants >= 5 ? '#f7f7f7' : 'white',
                    color: guests.infants >= 5 ? '#ccc' : '#222',
                    cursor: guests.infants >= 5 ? 'not-allowed' : 'pointer',
                    fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >+</button>
              </div>
            </div>
          </div>
          
          <div style={{borderTop: '1px solid #ddd', paddingTop: '16px'}}>
            <button 
              onClick={toggleGuestDropdown}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#222',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CalenderSection;
