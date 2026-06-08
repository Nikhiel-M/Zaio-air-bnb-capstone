import styled from "styled-components";
import { Title, Subtitle } from "../../Styles/General.styled";

export const BookingTitle = styled(Title)`
  color: black;
  padding-right: 3rem;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-right: 0.6rem;
  }
`;

export const BookingSubtitle = styled(Subtitle)`
  font-size: 0.9rem;
  color: gray;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const BookingPaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1.2rem;
  width: fit-content;
  border-radius: 8px;
  border: 1px solid lightgray;

  .reserve-button {
    margin: 0 0.8rem 0.8rem 15%;
    background-color: #e74a4aff;
    color: white;
    width: 70%;
    font-size: 0.9rem;
    padding: 0.55rem 1.1rem;

    &:hover {
      transform: 0;
    }
    &:active {
      transform: 0;
    }

    &:hover {
      background-color: #f33d3dff;
    }
  }

  .guests-subtitle {
    display: flex;
    justify-content: center;
    font-size: 0.72rem;
    background-color: white;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 420px;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    max-width: none;
    margin: 0.7rem 0;

    .reserve-button {
      margin: 0 0.6rem 0.7rem;
      width: calc(100% - 1.2rem);
      font-size: 0.86rem;
    }

    .guests-subtitle {
      font-size: 0.68rem;
      padding-bottom: 0.4rem;
    }
  }
`;
export const BookingPaymentHeader = styled.div`
  display: flex;
  font-size: 1.1rem;
  justify-content: space-between;
  padding: 0.7rem;

  @media (max-width: 768px) {
    padding: 0.55rem;
  }
`;

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 0.6rem;
  }
`;

export const BookingCalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .check {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .check {
      justify-content: flex-start;
    }
  }
`;

export const BookingCheckIn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;

  @media (max-width: 768px) {
    padding: 0.55rem;
  }
`;

export const BookingCheckOut = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;

  @media (max-width: 768px) {
    padding: 0.55rem;
    border-top: 1px solid #efefef;
  }
`;

export const BookingGuests = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  border-top: 1px solid lightgray;
  background-color: white;
  @media (max-width: 768px) {
    padding: 0.55rem;
  }
`;

export const GuestsDropdown = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  width: 180px;
  margin-top: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
