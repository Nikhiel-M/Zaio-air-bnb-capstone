import styled from "styled-components";

export const CardBody = styled.p`
 
 .cards{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    left: 0;
    position: relative;
    margin-left: 2rem;
}

.card-title{
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0 1rem 2rem;
    color: #000;
}
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  max-width: 400px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 2rem 2rem 2rem 2rem;

`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 8px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;


