import styled from "styled-components";

export const LocationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 992px) {
    padding: 1.25rem 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 0.45rem;
  }
`;

export const LocationsCard = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 65%;
  }

  @media (max-width: 992px) {
    width: 80%;
    margin: 0.7rem 0;
    padding: 0.85rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.45rem 0;
    padding: 0.75rem;
    border-radius: 10px;

    &:hover {
      transform: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
  }
`;

export const LocationsInformationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 992px) {
    gap: 0.75rem;
    margin-top: 0.55rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 0.25rem;
  }
`;

export const LocationDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LocationImage = styled.img`
  min-width: 15rem;
  max-width: 15rem;
  min-height: 13rem;
  max-height: 13rem;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 992px) {
    min-width: 12rem;
    max-width: 12rem;
    min-height: 10rem;
    max-height: 10rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    min-height: 11rem;
    max-height: 11rem;
    border-radius: 9px;
  }

  @media (max-width: 480px) {
    min-height: 9.5rem;
    max-height: 9.5rem;
    border-radius: 8px;
  }
`;

export const LocationTitle = styled.h1`
  font-size: 1.5rem;
  color: #222;
  margin: 0.5rem 0;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 1.28rem;
    margin: 0.35rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.08rem;
  }
`;

export const LocationSubtitle = styled.h2`
  font-size: 1rem;
  color: #666;
  margin: 0.25rem 0;
  font-weight: 400;

  @media (max-width: 992px) {
    font-size: 0.92rem;
    margin: 0.2rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`;

export const LocationReview = styled.h2`
  font-size: 1rem;
  color: #666;
  margin: 0.25rem 0;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.82rem;
  }
`;       