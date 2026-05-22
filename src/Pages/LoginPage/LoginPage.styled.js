import styled from "styled-components";
import { Subtitle, Title } from "../../Styles/General.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: auto;
  overflow: hidden;

`;
export const LoginSubContainer = styled.div`
  border: 1px solid #4e5cdb;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const LoginIcon = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: contain;
`;

export const LoginTitle = styled(Title)`
  color: #000;
  font-size: 4rem;
  padding: 1rem;
  font-weight: 100;
`;

export const LoginSubtitle = styled(Subtitle)`
  color: #4e5cdb;
  font-size: 1rem;
`;

export const LoginButton = styled(PillButton)`
  color: #ffffffff;
  background-color: #4e5cdb;
  border-radius: 5px;
  width: 15vw;

  &:hover {
    background-color: #5e6ef6ff;
  }
`;

export const LoginForm = styled.input`
  border: 1px black solid;
  border-radius: 6px;
  width: 23rem;
  height: 2rem;
`;

export const LoginHeader = styled.div`
  display: flex;
`;

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;

  .form-container {
    padding: 1rem 0;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .forgot-password {
    display: flex;
    justify-content: center;
  }

  .a-tag {
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
