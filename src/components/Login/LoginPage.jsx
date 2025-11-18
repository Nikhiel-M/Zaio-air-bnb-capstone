import React from 'react'
import { LoginContainer, LoginForm, EmailInput, PasswordInput } from './LoginPage.styled';
import { PillButton } from "../Buttons/PillButton.styled";


const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <h1>Login</h1>
        <EmailInput type="email" placeholder="Email" />
        <PasswordInput type="password" placeholder="Password" />
        <PillButton className='login-btn'>Login</PillButton>
        </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage