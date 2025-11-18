import styled from "styled-components";

export const LocationsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
`
export const LocationsCard = styled.div`
height: fit-content;
width: 40%;
display: flex;
flex-direction: column;
border: 1px solid #ccc;
border-radius: 8px;
padding: 1rem;
margin: 1rem;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`
export const LocationsInformationContainer = styled.div`
margin-top: 1rem;
display: flex;
flex-direction: row;
`;

export const LocationDetails = styled.div`
margin-left: 0.3rem;
`;

export const LocationImage = styled.img`
height: auto;
width: 30%;
border-radius: 8px;
height: 15%;
`;

export const LocationTitle = styled.h1`
font-size: 3rem;
color: black;
`;

export const LocationSubtitle = styled.h2`

font-size: 1rem;
color: gray;
`;    

export const LocationReview = styled.h2`

font-size: 1rem;
color: gray;
`;       