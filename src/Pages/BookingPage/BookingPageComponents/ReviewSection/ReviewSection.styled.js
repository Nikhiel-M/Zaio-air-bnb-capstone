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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`