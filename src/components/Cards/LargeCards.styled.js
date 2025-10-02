import styled from "styled-components";

export const LargeCardsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 1rem;
padding: 2rem;
`

export const CardOrganizer = styled.div`
display: flex;
flex-direction: row;
`;

export const ImageWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;

.body-image{
    width: 100%;
    height: 90%;
    border-radius: 12px;
}
`;

export const TitleOverlay = styled.div`
position: absolute;
bottom: 10rem;
left: 50%;
transform: translateX(-50%);
z-index: 10;
text-align: center;
padding: 1rem 2rem;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

.img-title{
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.img-button{
    margin-top: 0.5rem;
}
`;

