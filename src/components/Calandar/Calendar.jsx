import React, { useState } from 'react'
import { CalendarSection } from './Calendar.styled'

const CalendarComponent = ({ onDateSelect, minDate, isCheckout }) => {

	const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const currentMonth = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
    
    const days = [];
    const today = new Date();
    const minDateObj = minDate ? new Date(minDate) : null;
    
    const prevMonth = new Date(year, month - 1, 0);
    const daysInPrevMonth = prevMonth.getDate();
    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      days.push(
        <button key={`prev-${daysInPrevMonth - i}`} className="date faded" disabled>
          {daysInPrevMonth - i}
        </button>
      );
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDateInLoop = new Date(year, month, day);
      const isToday = today.toDateString() === currentDateInLoop.toDateString();
      const isPastDate = currentDateInLoop < today.setHours(0,0,0,0);
      const isBeforeMinDate = minDateObj && currentDateInLoop <= minDateObj;
      const isDisabled = isPastDate || (isCheckout && isBeforeMinDate);
      
      const handleDateClick = () => {
        if (!isDisabled && onDateSelect) {
          const selectedDate = new Date(year, month, day);
          onDateSelect(selectedDate.toISOString().split('T')[0]); // Format: YYYY-MM-DD
        }
      };
      
      days.push(
        <button 
          key={day} 
          className={`date ${isToday ? 'current-day' : ''} ${isDisabled ? 'disabled' : ''}`}
          onClick={handleDateClick}
          disabled={isDisabled}
          style={isDisabled ? {cursor: 'not-allowed', opacity: 0.3} : {}}
        >
          {day}
        </button>
      );
    }
    
    const totalCells = Math.ceil(days.length / 7) * 7;
    const remainingCells = totalCells - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <button key={`next-${day}`} className="date faded" disabled>
          {day}
        </button>
      );
    }
    
    return days;
  };
  return (
    <CalendarSection>
        <div className="datepicker">
	<div className="datepicker-top">

		<div className="month-selector">
			<button className="arrow" onClick={goToPreviousMonth}>‹</button>
			<span className="month-name">{currentMonth} {currentYear}</span>
			<button className="arrow" onClick={goToNextMonth}>›</button>
		</div>
	</div>
	<div className="datepicker-calendar">
		<span className="day">Mo</span>
		<span className="day">Tu</span>
		<span className="day">We</span>
		<span className="day">Th</span>
		<span className="day">Fr</span>
		<span className="day">Sa</span>
		<span className="day">Su</span>
		{generateCalendarDays()}
	</div>
</div>
    </CalendarSection>
  )
}

export default CalendarComponent