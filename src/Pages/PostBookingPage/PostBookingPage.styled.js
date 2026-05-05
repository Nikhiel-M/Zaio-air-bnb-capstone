import styled from "styled-components";
import { Title } from "../../Styles/General.styled";
import { LoginForm } from "../LoginPage/LoginPage.styled";

export const PostBookingTitle = styled(Title)`
color: #000;                       
`;

export const PostBookingSubtitle = styled.h5`
color: black;
font-size: 1rem;
font-weight: 600;
margin: 0;
`

export const PostBookingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;

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
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 3rem;
margin-top: 5rem;
width: 100%;
padding: 0 5rem;

.description {
 text-align: left;
  height: 10rem;
}

.left-column{
  display: flex;
  flex-direction: column;
  width: 30%;
}

.right-column{
  display: flex;
  flex-direction: column;
  width: 30%;
}

.column-container{
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

`;

export const PostBookingAlignmentContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`



export const PostBookingForm = styled(LoginForm)`
border: 2px solid #000000;
color: black;
padding: 1rem;
width: 100%;
border-radius: 5px;
cursor: pointer;
background: white;
margin: 0.3rem 0 1rem 0;
text-align: start;

&:focus {
  border: 2px solid #000000;
  outline: none;
}
`

export const PostBookingTextarea = styled.textarea`
border: 2px solid #000000;
color: black;
padding: 1rem;
width: 100%;
border-radius: 5px;
cursor: pointer;
background: white;
margin: 0.3rem 0 1rem 0;
text-align: start;

&:focus {
  border: 2px solid #000000;
  outline: none;
}
`

export const PostBookingSelector = styled.select`
border: 2px solid #000000;
color: black;
width: 100%;
border-radius: 5px;
 cursor: pointer;
 padding: 0.4rem;
 margin: 0.3rem 0 1rem 0;

&:focus {
  border: 2px solid #000000;
  outline: none;
}
`
export const HiddenFileInput = styled.input`
display: none;
`

export const ImagePickerButton = styled.button`
  border: 2px solid #372ee5;
  padding: 4rem;
  width: 100%;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: black;
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
  padding: 0.3rem;
  border: 2px solid #372ee5;
  border-radius: 5px;
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
  border: 2px solid #eee;
  border-radius: 5px;
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