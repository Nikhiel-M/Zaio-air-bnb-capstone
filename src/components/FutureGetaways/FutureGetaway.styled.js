import styled from "styled-components";

export const GetawayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem 1rem 4rem;

  .Getaway-title {
    color: black;
    font-size: 2rem;
    padding: 1rem;
    white-space: nowrap;
  }

  .Getaway-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid lightgray;
    width: 90%;
  }

  @media (max-width: 992px) {
    padding: 0 0.9rem 0.7rem;

    .Getaway-title {
      font-size: 1.3rem;
      white-space: normal;
      padding: 0.5rem 0;
    }

    .Getaway-header {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 0.55rem 0.6rem;

    .Getaway-title {
      font-size: 1.12rem;
      line-height: 1.2;
      padding: 0.45rem 0;
    }

    .Getaway-header {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      gap: 0.2rem;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .Getaway-header::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 0 0.4rem 0.55rem;

    .Getaway-title {
      font-size: 1rem;
    }
  }
`;

export const GetawayHeader = styled.h1`
  font-size: 1rem;
  color: gray;
  padding: 1rem 1rem 0.5rem 1rem;
  cursor: pointer;
  margin: 0;

  &:hover, &.active {
    color: black;
    border-bottom: 2px solid #e74a4aff;
  }

  @media (max-width: 768px) {
    white-space: nowrap;
    flex: 0 0 auto;
    font-size: 0.76rem;
    padding: 0.65rem 0.5rem 0.35rem;
  }

  @media (max-width: 480px) {
    font-size: 0.72rem;
    padding: 0.6rem 0.45rem 0.35rem;
  }
`;

export const GetawayCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 4fr));
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.45rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 0.45rem;
    row-gap: 0.35rem;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
`;

export const GetawayCards = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.84rem;
    padding-bottom: 0.15rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const GetawaySubtitle = styled.div`
  font-size: 0.8rem;
  color: gray;

  @media (max-width: 768px) {
    font-size: 0.68rem;
  }
`;

export const GetawayOrganizer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem 0.3rem 1rem;

  @media (max-width: 992px) {
    padding: 0.5rem 0.35rem;
  }

  @media (max-width: 600px) {
    padding: 0.45rem 0.25rem;
    min-height: 2.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.25rem;
  }

  .more {
    border-bottom: 2px solid #e74a4a;
    padding: 0;
  }
`;