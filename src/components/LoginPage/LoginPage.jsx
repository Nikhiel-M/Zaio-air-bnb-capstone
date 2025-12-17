import React from "react";
import {
  LoginConatiner,
  LoginHeader,
  LoginBody,
  LoginFooter,
  LoginForm,
  LoginTitle,
  LoginSubtitle,
  LoginButton,
} from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <LoginConatiner>
      <LoginHeader>
        <LoginHeader>
          <LoginTitle>Login</LoginTitle>
        </LoginHeader>
      </LoginHeader>

      <LoginBody>
        <div className="form-container">
          <LoginSubtitle>Username</LoginSubtitle>
          <LoginForm />
        </div>

        <div className="form-container">
          <LoginSubtitle>Password</LoginSubtitle>
          <LoginForm />
        </div>
      </LoginBody>

      <LoginFooter>
        <LoginSubtitle className="forgot-password"><a href="forgotPassword" className="a-tag">Forgot password?</a></LoginSubtitle>
        
        <LoginButton>Login</LoginButton>
      </LoginFooter>
    </LoginConatiner>
  );
};

export default LoginPage;
