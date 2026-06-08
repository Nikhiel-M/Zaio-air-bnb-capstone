import styled from "styled-components";
import { Title } from "../../Styles/General.styled";

export const CardBody = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    left: 0;
    position: relative;
    margin-left: 2rem;
  }

  .inspiration-title {
    margin: 2rem 0 1.4rem 2rem;
  }

  .cards > *:nth-child(1) {
    background-color: #d95058;
  }

  .cards > *:nth-child(2) {
    background-color: #cf2e4d;
  }

  .cards > *:nth-child(3) {
    background-color: #bf1f66;
  }

  .cards > *:nth-child(4) {
    background-color: #e03a4f;
  }

  .cards > *:nth-child(5) {
    background-color: #8e2f5f;
  }

  @media (max-width: 992px) {
    .cards {
      gap: 0.9rem;
      margin: 0 1rem;
      justify-content: center;
    }

    .inspiration-title {
      margin: 1.35rem 1rem 1rem;
    }
  }

  @media (max-width: 768px) {
    .cards {
      gap: 0.75rem;
      margin: 0 0.75rem;
    }

    .inspiration-title {
      margin: 1rem 0.75rem 0.85rem;
    }
  }

  @media (max-width: 480px) {
    #glass-house {
      display: none;
    }
    .cards {
      gap: 0.6rem;
      margin: 0 0.5rem;
    }

    .inspiration-title {
      margin: 0.85rem 0.5rem 0.75rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
  margin-bottom: 1.6rem;
  max-width: 300px;
  min-width: 300px;
  width: 300px;
  background-color: #de3151;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 992px) {
    min-width: 0;
    max-width: 240px;
    width: calc(50% - 0.5rem);
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    max-width: none;
    width: calc(50% - 0.4rem);
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    width: calc(50% - 0.35rem);
    border-radius: 10px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1200px) {
    height: 180px;
  }

  @media (max-width: 992px) {
    height: 140px;
  }

  @media (max-width: 480px) {
    height: 110px;
  }
`;

export const CardContent = styled.div`
  padding: 1rem 1rem 1.1rem 1rem;

  @media (max-width: 992px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.65rem;
  }
`;

export const CardTitle = styled(Title)`
  font-size: 2.45rem;
  font-weight: 700;
  margin: 1rem 0 1rem 2rem;
  color: #121212;

  @media (max-width: 992px) {
    font-size: 1.85rem;
    margin: 1rem 0 1rem 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.45rem;
    margin: 1rem 0 1rem 0.5rem;
  }
`;

export const SmlCardTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 0.35rem;
  color: white;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.86rem;
    margin-bottom: 0.2rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: white;
  line-height: 1.4;
  opacity: 0.95;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 992px) {
    font-size: 0.82rem;
  }

  @media (max-width: 480px) {
    font-size: 0.72rem;
  }
`;
