import styled from "styled-components";

export const BookingPaymentContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 2rem;
width: fit-content;
border-radius: 8px;
border: 1px solid lightgray;


`;
export const BookingPaymentHeader = styled.div`
display: flex;
font-size: 1.5rem;
justify-content: space-between;
padding: 1rem;


.title{
    color: black;
    padding-right: 5rem;
    font-size: 2rem;
}

.subtitle{
    font-size: 1rem;
    color: gray;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
`;

export const BookingContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgray;
border-radius: 8px;
margin: 1rem;

`;

export const BookingCalendarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

`;

export const BookingCheckIn = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`;

export const BookingCheckOut = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`;

export const BookingGuests = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
border-top: 1px solid lightgray;
`;

export const GuestsDropdown = styled.div`
  position: relative;
  display: flex;
  width: 220px;
  margin-top: 8px;
`;

/* Button that shows current selection */
export const DropdownButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid lightgray;
  background: white;
  text-align: left;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

/* The absolute list shown when open */
export const DropdownList = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  border-radius: 6px;
  z-index: 20;
  min-width: 160px;
  padding: 8px;
`;

/* Individual item */
export const DropdownItem = styled.div`
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  color: #111;
  &:hover {
    background: #f1f5f9;
  }
  &.active {
    background: #eef2ff;
    font-weight: 600;
  }
`;

