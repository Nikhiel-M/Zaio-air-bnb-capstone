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
    margin-top: 8rem;

    &:hover{
        color: white;
    }
}

.error-msg{
  color: red;
  padding-top: 1rem;
}
`;

export const PostBookingFormContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap: 4rem;
margin-top: 5rem;
width: 100%;
padding: 0 5rem;
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

export const AmenityWrapper = styled.div`
  position: relative;
`;

export const AmenityToggle = styled.button`
  width: 100%;
  padding: 1.3rem;
  border: 1px solid #372ee5;
  border-radius: 8px;
  background: white;
  text-align: left;
  color: gray;
  cursor: pointer;
`;

export const AmenityMenu = styled.div`
  position: absolute;
  z-index: 20;
  top: 3.7rem;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  max-height: 12rem;
  overflow-y: auto;
  padding: 0.5rem;
`;

export const AmenityItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  cursor: pointer;
`;
;