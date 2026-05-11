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
  PostBookingTextarea,
} from "../PostBookingPage/PostBookingPage.styled";

export const UpdateListingContainer = styled(PostBookingContainer)`
margin-top: 0;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
overflow: hidden;

.grid-container {
  margin-top: 5rem;
  margin-left: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0;
  width: 60%;
  }

  .alignment-div{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 80%;
  }
`;

export const UpdateListingsTitle = styled(PostBookingTitle)`
margin-right: 2rem ;
padding: 0;

`;

export const UpdateListingsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  .description {
  }
`;

export const UpdateListingsTextArea = styled(PostBookingTextarea)`
border: 2px solid #000000;
color: black;
width: 100%;
border-radius: 5px;
cursor: pointer;
background: white;
margin: 0.4rem 0 1rem 0;
text-align: start;
min-height: 8rem;
height: 8rem;
padding: 0.5rem;

&:focus {
  border: 2px solid #000000;
  outline: none;
}

`

export const UpdateListingsForm = styled(PostBookingForm)`

  &.number-input::-webkit-outer-spin-button,
  &.number-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const UpdateListingsSelector = styled(PostBookingSelector)``;

export const UpdateListingsHiddenFileInput = styled(HiddenFileInput)``;

export const UpdateListingsImagePickerButton = styled(ImagePickerButton)``;

export const UpdateListingsAmenityWrapper = styled(AmenityWrapper)``;

export const UpdateListingsAmenityToggle = styled(AmenityToggle)``;

export const UpdateListingsAmenityMenu = styled(AmenityMenu)``;

export const UpdateListingsAmenityItem = styled(AmenityItem)``;
