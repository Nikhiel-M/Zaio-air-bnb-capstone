import React, {useState} from 'react'
import { LoginContainer, LoginHeader, LoginBody, LoginFooter, LoginForm, LoginTitle, LoginSubtitle, LoginButton } from '../LoginPage/LoginPage.styled'
import { useNavigate } from 'react-router-dom'
import { authAPI } from '../../services/api'

const LoginHostPage = () => {

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
              await authAPI.login({ email, password });
              navigate("/");
            } catch (err) {
              setError(err.message || "Login failed");
            } finally {
              setLoading(false);
            }
          };

        

  return (
       <LoginContainer>
          <LoginHeader>
            <LoginHeader>
              <LoginTitle>Login Host</LoginTitle>
            </LoginHeader>
          </LoginHeader>
    
    
          <form onSubmit={handleSubmit}>
            <LoginBody>
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
              <LoginSubtitle className="forgot-password">
                {/* add Forgot password functionality */}
                <a className="a-tag">Forgot password?</a>
              </LoginSubtitle>
              <LoginSubtitle className="forgot-password">
                <a onClick={() => navigate("/register-host")} className="a-tag">Register to be a host here!</a>
              </LoginSubtitle>
    
              <LoginButton type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </LoginButton>
            </LoginFooter>
          </form>
        </LoginContainer>
  )
}

export default LoginHostPage