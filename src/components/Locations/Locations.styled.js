import styled from "styled-components";

export const LocationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
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

  @media (max-width: 768px) {
    width: 90%;
    margin: 0.5rem;
  }
`;

export const LocationsInformationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const LocationTitle = styled.h1`
  font-size: 1.5rem;
  color: #222;
  margin: 0.5rem 0;
  font-weight: 600;
`;

export const LocationSubtitle = styled.h2`
  font-size: 1rem;
  color: #666;
  margin: 0.25rem 0;
  font-weight: 400;
`;

export const LocationReview = styled.h2`
  font-size: 1rem;
  color: #666;
  margin: 0.25rem 0;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;       