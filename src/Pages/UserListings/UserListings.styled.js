import styled from "styled-components";
import {
  LocationTitle,
  LocationSubtitle,
  LocationsContainer,
  LocationsCard,
  LocationsInformationContainer,
  LocationDetails,
  LocationImage,
  LocationReview,
} from "../../components/Locations/Locations.styled";
import { DropDownContainer } from "../../components/Profile Section/ProfileSection.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";


export const UserListingsTitle = styled(LocationTitle)`
`;

export const UserListingsSubtitle = styled(LocationSubtitle)`
`;

export const UserListingsReview = styled(LocationReview)`
  font-size: 1rem;
  color: #666;
  font-weight: 400;
`;

export const UserListingsContainer = styled(LocationsContainer)`


.header {
    font-size: 2.5rem;
}
`;

export const UserListingsCard = styled(LocationsCard)`
width: 90%;
height: auto;
 
`;


export const UserListingsInformationContainer = styled(LocationsInformationContainer)`

`;

export const UserListingsDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  
  .review-price-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    color: black;
    font-weight: 600;
  }
`;

export const UserListingsImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 3rem 0 5rem;

.delete-btn{
  background-color: red;

  &:hover{
    background-color: #ff2121;
  }
}
`;

export const UserListingsImage = styled(LocationImage)`
object-fit: cover;

`;

export const UserListingsPillButton = styled(PillButton)`
background-color: blue;
color: white;
width: 100%;
font-size: 1rem;
font-weight: 100;
border-radius: 10px;

&:hover {
  background-color: #2727ff;
}
`

