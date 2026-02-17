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

export const UserListingsTitle = styled(LocationTitle)`


`;

export const UserListingsSubtitle = styled(LocationSubtitle)`

`;

export const UserListingsContainer = styled(LocationsContainer)`


.header {
    font-size: 2.5rem;
}
`;

export const UserListingsCard = styled(LocationsCard)`
  transform: translate(0, 0);

&:hover{
  transform: translate(0, 0);
}
`;

export const UserListingsInformationContainer = styled(LocationsInformationContainer)`

`;

export const UserListingsDetails = styled(LocationDetails)`

`;

export const UserListigsImage = styled(LocationImage)`

`;


export const UserListingsReview = styled(LocationReview)`

`;

export const UserListingsIcon = styled.div`
height: 10%;

.options-icon{
  font-size: 2.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 9999px;

  &:hover {
    background-color: #ebebeb;
  }
}
`;

export const OptionsMenu = styled(DropDownContainer)`
   transform: translate( -2rem, -11rem);
   padding: 0;

  .options-title{
    font-size: 1rem;
    color: grey;
    padding:  1rem 1rem 0.2rem 1rem;
    cursor: pointer;

    
  }
`;

 