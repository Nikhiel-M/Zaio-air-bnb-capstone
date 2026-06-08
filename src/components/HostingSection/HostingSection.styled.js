import styled from "styled-components";

export const HostingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 2rem 4rem;
margin-top: 2rem;
border-radius: 10px;
width: 100%;

.host-image{
    width: 100%;
    height: clamp(20rem, 62vw, 50rem);
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    image-rendering: optimizeQuality;
    
}

.host-overlay{
    position: absolute;
    top: 40%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: min(90%, 560px);
}

.host-title{
    font-weight: 700;
    white-space: normal;
    margin-top: 2rem;
        font-size: clamp(2rem, 5vw, 5rem);
    line-height: 1.2;
    max-width: 500px;
    word-wrap: break-word;
    text-align: center;
}

.host-button {
        margin-top: 0.8rem;
}

@media (max-width: 992px) {
    padding: 1.25rem 1.25rem;

    .host-image {
        border-radius: 10px;
    }

    .host-overlay {
        top: 45%;
        left: 26%;
    }

    .host-title {
        max-width: 420px;
        margin-top: 0;
    }
}

@media (max-width: 768px) {
    padding: 0.9rem 0.75rem;
    margin-top: 1.2rem;

    .host-image {
        height: clamp(16rem, 80vw, 24rem);
        border-radius: 9px;
        filter: brightness(0.82);
    }

    .host-overlay {
        top: auto;
        bottom: 1.2rem;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 1rem;
    }

    .host-title {
        font-size: clamp(1.5rem, 7vw, 2.4rem);
        max-width: 320px;
        margin: 0 auto;
        line-height: 1.18;
    }

    .host-button {
        margin-top: 0.7rem;
        padding: 0.65rem 1.15rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    padding: 0.6rem 0.5rem;

    .host-image {
        height: clamp(14rem, 86vw, 20rem);
        border-radius: 8px;
        filter: brightness(0.8);
    }

    .host-title {
        font-size: clamp(1.2rem, 6.8vw, 1.85rem);
        max-width: 260px;
    }

    .host-button {
        margin-top: 0.55rem;
        padding: 0.55rem 0.95rem;
        font-size: 0.82rem;
    }
}
`;