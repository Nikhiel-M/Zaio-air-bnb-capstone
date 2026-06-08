import styled from "styled-components";

export const ReviewSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  margin: 2rem 0;

  .reviewContainer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .reviewContainer > div:first-child {
    font-size: 1rem;
    font-weight: 600;
    color: #222;
  }

  .progressBar {
    width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 1.2rem;
    padding: 1.2rem 0;
    margin: 1rem 0;

    .reviewContainer {
      gap: 0.55rem;
    }

    .reviewContainer > div:first-child {
      font-size: 0.92rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
    padding: 0.75rem 0;
    margin: 0.6rem 0;

    .reviewContainer {
      gap: 0.4rem;
    }

    .reviewContainer > div:first-child {
      font-size: 0.86rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.7rem;

    .reviewContainer > div:first-child {
      font-size: 0.8rem;
    }
  }
`