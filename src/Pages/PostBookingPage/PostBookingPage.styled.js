import styled from "styled-components";
import { Title } from "../../Styles/General.styled";
import { LoginForm } from "../LoginPage/LoginPage.styled";

export const PostBookingTitle = styled(Title)`
color: #000;                       
`;

export const PostBookingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 5rem;
padding: 3rem;

.post-btn{
    padding: 1rem 4rem;
    margin-top: 10rem;

    &:hover{
        color: white;
    }
}
`;

export const PostBookingFormContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 4rem;
margin-top: 5rem;
width: 100vw;
padding: 0 10rem;
`;

export const PostBookingForm = styled(LoginForm)`
border-color: #372ee5;
color: grey;
padding: 2rem;
width: 100%;
border-radius: 10px;
cursor: pointer;
background: white;

&:focus {
  border-color: #372ee5;
  outline: none;
}
`

export const PostBookingSelector = styled.select`
border-color: #372ee5;
color: grey;
padding: 1rem;
width: 100%;
border-radius: 10px; 
 cursor: pointer;

&:focus {
  border-color: #372ee5;
  outline: none;
}
`
export const HiddenFileInput = styled.input`
display: none;
`

export const ImagePickerButton = styled.button`
  border: 1px solid #372ee5;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: gray;
  text-align: left;

  &:hover {
    background: #f4f3ff;
  }
`;