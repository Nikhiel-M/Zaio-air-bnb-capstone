import styled from "styled-components";

export const CalendarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 8rem;

button {
	font: inherit;
	cursor: pointer;
	&:focus {
		outline: 0;
	}
}

.datepicker {
	width: 95%;
	max-width: 350px;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, .2), 0 5px 10px 0 rgba(0, 0, 0, .1);
	padding: 1rem;
}

.datepicker-top {
	margin-bottom: 1rem;
}



.month-selector {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.arrow {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	background-color: #ffffff;
	color: #333;
	border-radius: 12px;
	width: 2.5rem;
	height: 2.5rem;
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 0 10px 0 rgba(0, 0, 0, .15);
	font-size: 1.2rem;
}

.month-name {
	font-weight: 600;
	color: #333;
}

.datepicker-calendar {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-row-gap: 1rem;
}

.day, .date {
	justify-self: center;
}

.day {
	color: #666;
	font-size: .875em;
	font-weight: 500;
	justify-self: center;
}

.date {
	border: 0;
	padding: 0;
	width: 2.25rem;
	height: 2.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	font-weight: 600;
	border: 2px solid transparent;
	background-color: transparent;
	color: #333;
	cursor: pointer;
	&:focus {
		outline: 0;
		color: #ff5a5f;
		border: 2px solid #ff5a5f;	
	}
	&:hover {
		background-color: #f0f0f0;
	}
}

.faded {
	color: #ccc;
}

.current-day {
	color: #ffffff;
	border-color: #ff5a5f;
	background-color: #ff5a5f;
	&:focus {
		background-color: #e04348;
	}
	&:hover {
		background-color: #e04348;
	}
}
`