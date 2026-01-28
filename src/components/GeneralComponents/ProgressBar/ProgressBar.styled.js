import styled from "styled-components"
import { Container } from "../../../Styles/General.styled"

export const ProgressContainer = styled(Container)`
width: 50%;

.progress{
height: 1rem;
width: 100%;
border: 1px solid #9c9c9cff;
border-radius: 5px;
margin:  1rem 0;

}

.amount{
    padding: 0 1rem;
}
`


export const ProgressFill = styled.div`
height: 100%;
width: ${({width}) => (typeof width === "number" ? `${width}%` : width || "0%")};
background-color: #ff5a5f;
`
// #838383