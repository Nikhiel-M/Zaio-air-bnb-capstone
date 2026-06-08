import styled from "styled-components";

export const GridContainer = styled.div`

width: 100%;
margin: 0;
padding: 0;
overflow-x: hidden;
overflow-y: hidden;

.table{
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
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
    font-size: 0.88rem;
    white-space: nowrap;
}

@media (max-width: 768px) {
    .cancel {
        padding: 0.25rem 0.35rem;
        border-radius: 8px;
        font-size: 0.68rem;
        min-width: 56px;
    }
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

@media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.25rem;
    line-height: 1;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    
}
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

@media (max-width: 768px) {
    font-size: 0.68rem;
    padding: 0.25rem;
    line-height: 1.2;
    vertical-align: middle;
}

`
export const GridText = styled.p`
margin: 0.5rem 0 0 0;
padding: 0;
overflow-wrap: anywhere;
word-break: break-word;

@media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0;
    text-align: center;
    line-height: 1.2;
    white-space: normal;
}

`