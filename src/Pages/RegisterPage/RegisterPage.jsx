import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../services/api";
import {
  LoginHeader,
  LoginBody,
  LoginFooter,
  LoginTitle,
  LoginSubtitle,
  LoginButton,
  LoginIcon,
} from "../LoginPage/LoginPage.styled";
import { RegisterContainer, RegisterBody, RegisterSubContainer, RegisterForm } from "./RegisterPage.styled";

const  RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await authAPI.register({ firstName, lastName, email, password});
      navigate("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterSubContainer>
         <span className="icon-container">
                  <LoginIcon src="https://www.vectorlogo.zone/logos/airbnb/airbnb-tile.svg" alt="Airbnb Logo" />
                </span>
      <LoginHeader>
          <LoginTitle>Register</LoginTitle>
      </LoginHeader>

      <form onSubmit={handleSubmit}>
        <RegisterBody>
          <div className="form-container">
            <LoginSubtitle>First Name</LoginSubtitle>
            <RegisterForm
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-container">
            <LoginSubtitle>Last Name</LoginSubtitle>
            <RegisterForm
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-container">
            <LoginSubtitle>Email</LoginSubtitle>
            <RegisterForm
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-container">
            <LoginSubtitle>Password</LoginSubtitle>
            <RegisterForm
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </RegisterBody>

        <LoginFooter>

          <LoginButton type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </LoginButton>
        </LoginFooter>
      </form>
      </RegisterSubContainer>
    </RegisterContainer>
  );
};

export default RegisterPage;
