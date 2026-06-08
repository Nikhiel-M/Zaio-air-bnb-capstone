import styled from "styled-components";
import { Title, Subtitle } from "../../Styles/General.styled";

export const BookingTitle = styled(Title)`
color: black;
font-size: 2.6rem;

@media (max-width: 1024px) {
  font-size: 2.8rem;
}

@media (max-width: 768px) {
  font-size: 1.9rem;
}

`
export const BookingSubtitle = styled(Subtitle)`
color: lightgray;
padding: 0.3rem 0;

@media (max-width: 768px) {
  font-size: 0.95rem;
  padding: 0.3rem 0;
}
`
export const BookingPageContainer = styled.div`
display: flex;
flex-direction: column;
padding: 1.2rem 6rem ;

@media (max-width: 1200px) {
  padding: 1.5rem 3rem;
}

@media (max-width: 768px) {
  padding: 1rem 0.8rem;
}
`
export const PaymentContainer = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0;
justify-content: space-between;

.review-title{
  font-size: 2.1rem;
    font-weight: 600;
  margin: 1rem 0 0 0;
}

@media (max-width: 1024px) {
  padding: 1.2rem 0;

  .review-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  padding: 0.8rem 0;

  .review-title {
    font-size: 1.7rem;
    margin-top: 1.2rem;
  }
}
`
export const InformationContainer = styled.div`
width: 100%;

.longDescription{
padding: 0.75rem 0 1.1rem 0;
border-bottom: 1px lightgray solid;
font-size: 1.2rem;
color: #5d5c5c;
line-height: 1.35;
word-break: break-all;
word-wrap: break-word;
overflow: hidden;
}

.informationBox{
    display: flex;
    flex-direction: column;
}

.alignmentBox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

@media (max-width: 1024px) {
  .longDescription {
    font-size: 1.25rem;
    line-height: 1.35;
    padding: 0.8rem 0 1.2rem;
  }
}

@media (max-width: 768px) {
  .longDescription {
    font-size: 1rem;
    line-height: 1.4;
    word-break: normal;
  }

  .alignmentBox {
    flex-direction: column;
    gap: 1rem;
  }
}
`
export const InformationHeader = styled.div`
display: flex;
padding:  1rem 0;
flex-direction: column;

.information-header-title{
  font-size: 2rem;
    color: black;
}

.information-header-subtitle{
  font-size: 1.2rem;
    color: gray;
}

@media (max-width: 1024px) {
  .information-header-title {
    font-size: 2rem;
  }

  .information-header-subtitle {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  padding: 0.6rem 0;

  .information-header-title {
    font-size: 1.35rem;
  }

  .information-header-subtitle {
    font-size: 0.95rem;
  }
}
`
export const InformationBody = styled.div`
display: flex;
padding: 0 1rem 1.1rem 0 ;
flex-direction: row;
border-bottom: 1px solid lightgray;


.titles-container{
    display: flex;
    flex-direction: column;
}
.information-body-title{
  font-size: 1.8rem;
}

.information-body-subtitle{
  font-size: 1.15rem;
    color: gray;
}

@media (max-width: 1024px) {
  padding: 0 1rem 1.2rem 0;

  .information-body-title {
    font-size: 1.65rem;
  }

  .information-body-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  padding: 0 0 1rem;

  .information-body-title {
    font-size: 1.15rem;
  }

  .information-body-subtitle {
    font-size: 0.95rem;
  }
}
`
export const InformationFooter = styled.div`
display: flex;
padding: 3rem 0 0 0;
`
export const HeaderContainer = styled.div`
font-size: 1.2rem;
display: flex;
align-items: baseline;
flex-direction: column;

.title{
    color: black;
}

.subtitle{
    color: gray;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

@media (max-width: 768px) {
  font-size: 1rem;

  .subtitle {
    gap: 0.35rem;
    font-size: 0.9rem;
  }
}
`
export const SubheaderContainer = styled.div`
width: 100%;
font-size: 1.05rem;
display: flex;
flex-direction: row;
justify-content: space-between;


.ShareSection{
display: flex;
align-items: center;
flex-direction: row;
gap: 1rem;
}

@media (max-width: 768px) {
  font-size: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;

  .ShareSection {
    gap: 0.8rem;
  }
}
`
export const ImageContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;
align-items: start;
width: 100%;

.main-image {
  width: 100%;
  height: 24rem;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  overflow: hidden;
}

@media (max-width: 1024px) {
  grid-template-columns: 1fr;
  .main-image {
    height: 20rem;
  }
}

@media (max-width: 768px) {
  .main-image {
    height: 13rem;
    border-radius: 10px;
  }
}
`
export const SubImageContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;
align-content: start;

.sub-image {
  width: 100%;
  height: calc((24rem - 0.5rem) / 2);
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  overflow: hidden;
}

@media (max-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
  .sub-image {
    height: 7.5rem;
  }
}

@media (max-width: 480px) {
  grid-template-columns: repeat(2, 1fr);
  .sub-image {
    height: 5.4rem;
  }
}
`
export const SleepContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1rem 1rem 0 ;
  border-bottom: 1px solid lightgray;

  .sleep-title{
    font-size: 1.8rem;
    padding: 1rem 0;
  }
    .sleep-subtitle{
    font-size: 1rem;
    padding: 0.5rem 0;
    color: #5d5c5c;
  }

  .bed-image{
  width: 35%;
  object-fit: cover;
  border-radius: 0.5rem;
  overflow: hidden;
  }

  @media (max-width: 1024px) {
    .sleep-title {
      font-size: 2rem;
      padding: 1.2rem 0;
    }

    .sleep-subtitle {
      font-size: 1.1rem;
    }

    .bed-image {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0 1rem;

    .sleep-title {
      font-size: 1.35rem;
      padding: 0.8rem 0;
    }

    .sleep-subtitle {
      font-size: 0.95rem;
      padding: 0.6rem 0;
    }

    .bed-image {
      width: 100%;
    }
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.75);
  z-index: 10000;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 1100px;
  max-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 18px 48px rgba(0,0,0,0.6);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
`;

export const ModalNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  background: rgba(255, 255, 255, 0.88);
  border: none;
  width: 2rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);

  &.left {
    left: -56px;
  }
  &.right {
    right: -56px;
  }

  @media (max-width: 900px) {
    &.left, &.right {
      display: none;
    }
  }
`;

export const OffersContainer = styled.div`
display: flex;
flex-direction: column;
padding:  0 0 1.8rem 0 ;
border-bottom: 1px solid lightgray;

.offersHeader{
    color: #000000cc;
    font-weight: 600;
  padding: 1rem 0 1.2rem 0;
};

@media (max-width: 1024px) {
  padding-bottom: 2rem;

  .offersHeader {
    font-size: 1.5rem;
    padding: 1rem 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .offersHeader {
    font-size: 1.2rem;
    padding: 0.8rem 0 1rem;
  }
}
`
export const OffersGrid = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 gap: 0.6rem;

 .amenity{
    color: black;
    display: flex;
    align-items: center;
 }

 @media (max-width: 768px) {
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 0.55rem;

   .amenity {
    font-size: 0.95rem;
   }
 }
`
export const CalendarContainer = styled.div`
border-bottom: 1px solid lightgray;
width: 100%;
padding-bottom: 3rem;

.Calendars{
    display: flex;
    align-items: center;
    flex-direction: row;
}

`

export const NightsContainer = styled.div`
display: flex;
flex-direction: column;
height: auto;
padding:  1rem 0 1.3rem 0 ;
border-bottom: 1px solid lightgray;

.nights-title{
  font-size: 2rem;
  padding-bottom: 0.5rem;
}

.nights-subtitle{
  color: #5d5c5c;
  font-size: 1rem;
  padding-bottom: 0.6rem;
}

.nights-calendar-container{
  display: flex;
  align-items: center;
  flex-direction: row;
}

.date-input{
  width: 10rem;
  padding: 0.4rem;
  margin: 1rem 1rem 0 0;
}

@media (max-width: 1024px) {
  .nights-title {
    font-size: 2.3rem;
  }

  .nights-subtitle {
    font-size: 1.1rem;
  }

  .date-input {
    width: 10.5rem;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  padding: 1rem 0 1.4rem;

  .nights-title {
    font-size: 1.4rem;
    padding-bottom: 0.4rem;
  }

  .nights-subtitle {
    font-size: 0.95rem;
    padding-bottom: 0.4rem;
  }

  .nights-calendar-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .date-input {
    width: 100%;
    margin: 0;
  }
}

`

