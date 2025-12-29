import styled from "styled-components";
import { Subtitle, Title } from "../../Styles/General.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";

export const LoginConatiner = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
width: 100vw;
`
export const LoginTitle = styled(Title)`
color: #000;
font-size: 4rem;
padding: 3rem;
font-weight: 100;
`

export const LoginSubtitle = styled(Subtitle)`
color: #4e5cdb;
font-size: 1rem;

`

export const LoginButton = styled(PillButton)`
color: #ffffffff;
background-color: #4e5cdb;
border-radius: 5px;
width: 15vw;

&:hover{
    background-color: #5e6ef6ff;
}
`

export const LoginForm = styled.input`
border: 1px black solid;
border-radius: 6px;
width: 100%;
height: 2rem;
`

export const LoginHeader = styled.div `
display: flex;
`

export const LoginBody = styled.div `
display: flex;
width: 20%;
flex-direction: column;

.form-container{
    padding: 2rem 0;
}
`

export const LoginFooter = styled.div `
display: flex;
padding: 5rem;
flex-direction: column;

.forgot-password{
    display: flex;
    justify-content: center;
}

.a-tag{
    text-decoration: none;
}
`