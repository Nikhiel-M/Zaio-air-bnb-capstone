import styled from "styled-components";
import { Title, Subtitle } from "../../Styles/General.styled";

export const BookingTitle = styled(Title)`
    color: black;
    padding-right: 5rem;
    font-size: 2rem;
`;

export const BookingSubtitle = styled(Subtitle)`
    font-size: 1rem;
    color: gray;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const BookingPaymentContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 2rem;
width: fit-content;
border-radius: 8px;
border: 1px solid lightgray;

.reserve-button{
  margin: 0 1rem 1rem 15%;
  background-color: #e74a4aff;
  color: white;
  width: 70%;

  &:hover{
    transform: 0;
  }
  &:active{
    transform: 0;
  }

  &:hover{
  background-color:  #f33d3dff;

};}

.guests-subtitle{
display: flex;
justify-content: center;
font-size: 0.8rem;
}

`;
export const BookingPaymentHeader = styled.div`
display: flex;
font-size: 1.5rem;
justify-content: space-between;
padding: 1rem;

`;

export const BookingContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgray;
border-radius: 8px;
margin: 1rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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

