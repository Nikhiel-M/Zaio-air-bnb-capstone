import styled from "styled-components";
import { LoginBody, LoginContainer, LoginForm, LoginSubContainer } from "../LoginPage/LoginPage.styled";

export const RegisterContainer = styled(LoginContainer)`
`


export const RegisterSubContainer = styled(LoginSubContainer)`
padding: 4rem 2rem 2rem 2rem ;
`
export const RegisterBody = styled(LoginBody)`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 1rem;

`

export const RegisterForm = styled(LoginForm)`
width: 17rem;

`