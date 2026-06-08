import styled from "styled-components";

export const CardOrganizer = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(300px, 1fr));
gap: 0.5rem;

@media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 0;
}

`;

export const LargeCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    height: clamp(20rem, 46vw, 42rem);

    @media (max-width: 992px) {
        padding: 1rem;
        height: clamp(18rem, 58vw, 26rem);
    }

    @media (max-width: 768px) {
        padding: 0.75rem;
        height: clamp(16rem, 62vw, 22rem);
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
        height: clamp(14rem, 68vw, 18rem);
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .body-image{
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 12px;
        object-fit: cover;

        @media (max-width: 768px) {
            border-radius: 10px;
        }

        @media (max-width: 480px) {
            border-radius: 8px;
        }
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

@media (max-width: 992px) {
    bottom: 3rem;
    width: 100%;
    padding: 0 1rem;
}

@media (max-width: 480px) {
    bottom: 1.2rem;
    gap: 0.5rem;
}

.img-title{
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
}

.img-button{
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        margin-top: 0;
        transform: scale(0.92);
    }

    @media (max-width: 480px) {
        transform: scale(0.86);
    }
}
`;

