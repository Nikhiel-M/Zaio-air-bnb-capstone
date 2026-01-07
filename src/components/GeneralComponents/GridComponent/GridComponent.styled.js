import styled from "styled-components";

export const GridContainer = styled.div`

width: 100%;
margin: 0;
padding: 0;

.table{
    border: 1px solid black;
    border-collapse: collapse;
}

.cancel{
    color: white;
    background-color: #dc1f1fff;
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
    padding: 0.5rem;
    border-radius: 16px;
    cursor: pointer;
}
`

export const GridTitle = styled.th`
font-weight: 600;
color: black;
background-color: lightgray;
border: 1px solid black;
font-size: 1rem;
padding: 0.5rem;
margin: 0;
text-align: center;
`
export const GridItem = styled.td`
font-weight: 500;
color: black;
background-color: lightgray;
border: 1px solid black;
font-size: 1rem;
padding: 0.5rem;
margin: 0;
text-align: center;

`
export const GridText = styled.p`
margin: 0.5rem 0 0 0;
padding: 0;
`