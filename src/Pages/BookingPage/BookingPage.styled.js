import styled from "styled-components";
import { Title, Subtitle } from "../../Styles/General.styled";

export const BookingTitle = styled(Title)`
color: black;
font-size: 4rem;

`
export const BookingSubtitle = styled(Subtitle)`
color: lightgray;
padding: 0.5rem 0;
`
export const BookingPageContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 10rem ;
`
export const PaymentContainer = styled.div`
display: flex;
flex-direction: row;
padding: 2rem ;
justify-content: space-between;

.review-title{
    font-size: 4rem;
    font-weight: 600;
    margin: 2rem 0 0 0;
}
`
export const InformationContainer = styled.div`
width: 100%;

.longDescription{
padding: 1rem 0 2rem 0;
border-bottom: 1px lightgray solid;
font-size: 1.8rem;
color: black;
line-height: 1.2;
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
`
export const InformationHeader = styled.div`
display: flex;
padding:  1rem 0;
flex-direction: column;

.information-header-title{
    font-size: 3rem;
    color: black;
}

.information-header-subtitle{
    font-size: 2rem;
    color: gray;
}
`
export const InformationBody = styled.div`
display: flex;
padding: 0 5rem 2rem 0 ;
flex-direction: row;
border-bottom: 1px solid lightgray;


.titles-container{
    display: flex;
    flex-direction: column;
}
.information-body-title{
    font-size: 3rem;
}

.information-body-subtitle{
    font-size: 2rem;
    color: gray;
}
`
export const InformationFooter = styled.div`
display: flex;
padding: 3rem 0 0 0;
`
export const HeaderContainer = styled.div`
font-size: 2rem;
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
`
export const SubheaderContainer = styled.div`
width: 100%;
font-size: 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;


.ShareSection{
display: flex;
align-items: center;
flex-direction: row;
gap: 1rem;
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
  height: 30rem;
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
`
export const SubImageContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;
align-content: start;

.sub-image {
  width: 100%;
  height: calc((30rem - 0.5rem) / 2);
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
    height: 6.3rem;
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
  z-index: 9999;
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
padding:  0 0 4rem 0 ;
border-bottom: 1px solid lightgray;

.offersHeader{
    color: #000000cc;
    font-weight: 600;
    padding: 2rem 0 3rem 0;
};
`
export const OffersGrid = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 gap: 1rem;

 .amenity{
    color: black;
    display: flex;
    align-items: center;
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



