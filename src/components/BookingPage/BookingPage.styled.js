import styled from "styled-components";

export const BookingPageContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2rem ;
`

export const HeaderContainer = styled.div`
font-size: 2rem;
display: flex;
align-items: baseline;
flex-direction: column;

.title{
    color: black;
}

.subtitle{
    color: gray;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
`

export const SubheaderContainer = styled.div`
width: 100%;
font-size: 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;


.ShareSection{
display: flex;
align-items: center;
flex-direction: row;
gap: 1rem;
}
`

export const ImageContainer = styled.div`
display: flex;

.main-image{
    width: 50%;
    margin-right: 0.5rem;
}

`

export const SubImageContainer = styled.div`
grid-template-columns: auto auto ;
gap: 0.5rem;
display: grid;


.sub-image{
    width: 100%;
}
`