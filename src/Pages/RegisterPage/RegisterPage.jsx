import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../services/api";
import {
  LoginContainer,
  LoginHeader,
  LoginBody,
  LoginFooter,
  LoginForm,
  LoginTitle,
  LoginSubtitle,
  LoginButton,
} from "../LoginPage/LoginPage.styled";

const RegisterPage = () => {
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
    <LoginContainer>
      <LoginHeader>
        <LoginHeader>
          <LoginTitle>Register</LoginTitle>
        </LoginHeader>
      </LoginHeader>

      <form onSubmit={handleSubmit}>
        <LoginBody>
          <div className="form-container">
            <LoginSubtitle>First Name</LoginSubtitle>
            <LoginForm
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-container">
            <LoginSubtitle>Last Name</LoginSubtitle>
            <LoginForm
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-container">
            <LoginSubtitle>Email</LoginSubtitle>
            <LoginForm
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-container">
            <LoginSubtitle>Password</LoginSubtitle>
            <LoginForm
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </LoginBody>

        <LoginFooter>

          <LoginButton type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </LoginButton>
        </LoginFooter>
      </form>
    </LoginContainer>
  );
};

export default RegisterPage;
