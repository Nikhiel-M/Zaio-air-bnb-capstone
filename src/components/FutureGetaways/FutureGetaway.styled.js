import styled from "styled-components";

export const GetawayContainer = styled.div`
  display: flex;
    flex-direction: column;
    padding: 0 4rem 1rem 4rem;

  .Getaway-title{
    color: black;
    font-size: 2rem;
    padding: 1rem;
    white-space: nowrap;
  }

  .Getaway-header {
    display: flex;
    flex-direction: row;
    left: 0;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid lightgray;
    width: 90%;
  }
`;

export const GetawayHeader = styled.h1`
  font-size: 1rem;
  color: gray;
  padding: 1rem 1rem 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover, &.active {
    color: black;
    border-bottom: 2px solid #e74a4aff;
  }
`;

export const GetawayCardsContainer = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax( 25rem, 4fr));
  gap: 1rem;
`
export const GetawayCards = styled.div`
font-size: 1rem;
padding: 0 0 0.5rem 0;
`;
 export const GetawaySubtitle = styled.div`
font-size: 0.8rem;
color: gray;
`
export const GetawayOrganizer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 1rem 2rem 0.3rem 1rem;

.more{
    border-bottom: 2px solid #e74a4a;
    padding: 0;
}
`