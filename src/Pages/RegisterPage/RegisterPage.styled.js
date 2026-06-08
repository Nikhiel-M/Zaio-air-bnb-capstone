import styled from "styled-components";
import { LoginBody, LoginContainer, LoginForm, LoginSubContainer } from "../LoginPage/LoginPage.styled";

export const RegisterContainer = styled(LoginContainer)`
`


export const RegisterSubContainer = styled(LoginSubContainer)`
padding: 4rem 2rem 2rem 2rem;

@media (max-width: 768px) {
  width: 100%;
  padding: 2rem 1rem 1.5rem;
}

@media (max-width: 480px) {
  padding: 1.5rem 0.75rem 1.2rem;
}
`
export const RegisterBody = styled(LoginBody)`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 1rem;

@media (max-width: 768px) {
  column-gap: 0.6rem;
}

@media (max-width: 480px) {
  column-gap: 0.4rem;
}
`

export const RegisterForm = styled(LoginForm)`
width: 17rem;

@media (max-width: 768px) {
  width: 100%;
  min-width: 0;
}
`