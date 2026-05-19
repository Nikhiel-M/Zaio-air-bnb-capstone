import styled from "styled-components";
import { Container } from "../../Styles/General.styled";

export const HostPageContainer = styled(Container)`
display: flex;
flex-direction: column;

`

export const HostPageHeader = styled.div`
display: flex;
align-self: start;


.pill-container{
    display: flex;
    margin: 1.5rem 0 5rem 0;
    gap: 3rem;
    flex-direction: row;
    align-items: flex-start;

}

.btn {
    font-size: 0.9rem;
    font-weight: 300;
}
`

export const HostPageBody = styled.div`
width: 100%;

`