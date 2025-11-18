import styled from "styled-components";

export const LoginContainer = styled.div`
padding: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const LoginForm = styled.div`
margin-top: 15%;
padding: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

.login-btn{
    margin-top: 1rem;
}
`;

export const EmailInput = styled.input`
width: 100%;
padding: 0.5rem;
margin-top: 1rem;
`;

export const PasswordInput = styled.input`
width: 100%;
padding: 0.5rem;
margin-top: 1rem;
`;