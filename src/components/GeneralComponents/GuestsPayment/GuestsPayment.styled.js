import styled from "styled-components";
import { Title } from "../../../Styles/General.styled";

export const GuestsPaymentContainer = styled.div`
padding: 1rem;

.last{
    padding-bottom: 2rem;
    border-bottom: 1px solid lightgray;
}

.total{
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: 1rem
}
`

;

export const GuestsTitle = styled(Title)`
font-size: 1.2rem;
color: black;
font-weight: 300;
`

export const Pricing = styled.div`
display: flex;
align-items: center;
font-weight: 300;
`;

export const PaymentRow = styled.div`
display: flex;
justify-content: space-between;


`