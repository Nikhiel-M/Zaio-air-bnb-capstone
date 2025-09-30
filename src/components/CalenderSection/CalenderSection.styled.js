import styled from "styled-components";

export const CalenderContainer = styled.div`
/* margin: 4rem 0 0 0; */
height: fit-content;
width: 60%;
background-color: white;
color: black;
font-size: 1rem;
border-radius: 30px;
display: flex;
flex-direction: row;
position: relative;

.search-icon{
    margin: 0.4rem 0.5rem 0 3rem ;
    height: 2.6rem;
    width: 2.9rem;
    color: white;
    fill: white;
    background-color: red;
    padding: 0.5rem 0.4rem 0.5rem 0.4rem;
    border-radius: 50%;
    cursor: pointer;
}


`;

export const DateContainer = styled.div`
width: 25%;
height: 50%;
padding:  0.5rem 0.5rem 0.5rem 1rem;
font-size: 2rem;
color: black;
    cursor: pointer;


.calender-title{
    font-size: 1.2rem;
}

.subtitle{
    font-size: 0.8rem;
    color: gray;
    margin: 0 0 0 0.1rem;
}
`