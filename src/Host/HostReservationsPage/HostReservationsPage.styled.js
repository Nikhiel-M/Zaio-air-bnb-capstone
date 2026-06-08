import styled from "styled-components";
import { Container, Title } from "../../Styles/General.styled";

export const ReservationsContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 0 2rem;

@media (max-width: 992px) {
	padding: 0 1rem;
}

@media (max-width: 768px) {
	padding: 0 0.5rem;
}
`

export const ReservationsHeader = styled(Title)`
color: black;
font-size: 3rem;
margin: 1.5rem 0;

@media (max-width: 992px) {
	font-size: 2.1rem;
	margin: 1rem 0;
}

@media (max-width: 768px) {
	font-size: 1.5rem;
	margin: 0.75rem 0;
}
`

export const ReservationsListContainer = styled(Container)`
width: 90%;

@media (max-width: 768px) {
	width: 100%;
	padding: 0;
}
`

export const ReservationsList = styled.div`
display: flex;

`
