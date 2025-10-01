import styled from "styled-components";

export const BodyContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
  background-color: black;
  color: white;

.body-image{
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: calc(20% - 20rem);
    padding: 0 10% 5% 10%;
    z-index: 1;
}

`;

export const ImageWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
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
