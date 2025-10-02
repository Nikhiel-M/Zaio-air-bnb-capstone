import styled from "styled-components";

export const GiftCardsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 1rem 4rem;

.gift-title{
    color: black;
    font-size: 5rem;
    font-weight: 600;
    padding: 0 1rem;

}

.gift-button{
    margin-left: 40%;
    margin-top: 2rem;
    color: white;
    background-color: black;

    &:hover{
        background-color: #e74a4a;
    }
}

.gift-image{
    width: 100%;
}

.gift-image-container{
width: 50%;
}
`;