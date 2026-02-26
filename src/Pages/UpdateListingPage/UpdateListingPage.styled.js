import styled from "styled-components";
import {
  PostBookingContainer,
  PostBookingTitle,
  PostBookingFormContainer,
  PostBookingForm,
  PostBookingSelector,
  HiddenFileInput,
  ImagePickerButton,
  AmenityWrapper,
  AmenityToggle,
  AmenityMenu,
  AmenityItem,
} from "../PostBookingPage/PostBookingPage.styled";

export const UpdateListingContainer = styled(PostBookingContainer)`
margin-top: 0;
`;

export const UpdateListingsTitle = styled(PostBookingTitle)``;

export const UpdateListingsFormContainer = styled(PostBookingFormContainer)`
grid-template-columns:  1fr 1fr 1fr ;

`;

export const UpdateListingsTextArea = styled.textarea`
border-color: #372ee5;
color: grey;
padding: 2rem;
width: 100%;
border-radius: 10px;
cursor: pointer;
background: white;
height: auto;

&:focus {
  border-color: #372ee5;
  outline: none;
}
`

export const UpdateListingsForm = styled(PostBookingForm)``;

export const UpdateListingsSelector = styled(PostBookingSelector)``;

export const UpdateListingsHiddenFileInput = styled(HiddenFileInput)``;

export const UpdateListingsImagePickerButton = styled(ImagePickerButton)``;

export const UpdateListingsAmenityWrapper = styled(AmenityWrapper)``;

export const UpdateListingsAmenityToggle = styled(AmenityToggle)``;

export const UpdateListingsAmenityMenu = styled(AmenityMenu)``;

export const UpdateListingsAmenityItem = styled(AmenityItem)``;
