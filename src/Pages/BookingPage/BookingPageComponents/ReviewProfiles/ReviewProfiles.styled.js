import styled from "styled-components"

export const ReviewProfile = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
    gap: 0.8rem;

    img {
      width: 64px;
      height: 64px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
    border-radius: 10px;
    gap: 0.65rem;

    &:hover {
      transform: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.75rem;

    img {
      width: 48px;
      height: 48px;
    }
  }
`

export const ReviewProfilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
    padding: 0.8rem 0;
  }
`