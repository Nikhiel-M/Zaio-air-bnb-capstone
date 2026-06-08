import styled from "styled-components";

export const GiftCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.5rem 4rem;
    width: 100%;

    .gift-copy {
        flex: 0 0 46%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .gift-title {
        color: black;
        font-size: clamp(2rem, 5vw, 4.2rem);
        font-weight: 700;
        line-height: 1.05;
        padding: 0;
    }

    .gift-button {
        margin-top: 1.4rem;
        color: white;
        background-color: black;
        padding: 0.75rem 1.35rem;
        font-size: 0.95rem;

        &:hover {
            background-color: #e74a4a;
        }
    }

    .gift-image {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 10;
        border-radius: 14px;
        display: block;
    }

    .gift-image-container {
        flex: 0 0 54%;
    }

    @media (max-width: 992px) {
        padding: 1rem 1.5rem;
        gap: 1.2rem;

        .gift-copy {
            width: 44%;
        }

        .gift-image-container {
            width: 56%;
        }

        .gift-button {
            margin-top: 1rem;
            padding: 0.65rem 1.15rem;
            font-size: 0.9rem;
        }

        .gift-image {
            border-radius: 12px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0.9rem;
        padding: 0.8rem 0.75rem;

        .gift-copy {
            width: 100%;
            align-items: center;
            text-align: center;
            order: 2;
        }

        .gift-title {
            font-size: clamp(1.5rem, 8vw, 2.3rem);
            line-height: 1.15;
        }

        .gift-button {
            margin-top: 0.8rem;
            padding: 0.6rem 1.05rem;
            font-size: 0.86rem;
        }

        .gift-image-container {
            width: 100%;
            order: 1;
        }

        .gift-image {
            border-radius: 10px;
            max-height: 240px;
        }
    }

    @media (max-width: 480px) {
        padding: 0.6rem 0.5rem;

        .gift-title {
            font-size: clamp(1.3rem, 7.4vw, 1.9rem);
        }

        .gift-button {
            margin-top: 0.6rem;
            padding: 0.55rem 0.95rem;
            font-size: 0.82rem;
        }

        .gift-image {
            max-height: 185px;
            border-radius: 8px;
        }
    }
`;