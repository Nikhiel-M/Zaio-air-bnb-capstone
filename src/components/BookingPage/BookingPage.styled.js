import styled from "styled-components";
import { Title, Subtitle } from "../../Styles/General.styled";

export const BookingTitle = styled(Title)`
color: black;
`
export const BookingSubtitle = styled(Subtitle)`
color: lightgray;
`

export const BookingPageContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2rem ;
`

export const PaymentContainer = styled.div`
display: flex;
flex-direction: row;
padding: 2rem ;
justify-content: space-between;
`
export const InformationContainer = styled.div`
display: flex;
flex-direction: column;

.longDescription{
padding: 2rem 0 3rem 0;
border-bottom: 1px lightgray solid;
}

.informationBox{
    display: flex;
    flex-direction: column;
}

.alignmentBox{
    display: flex;
}
`
export const InformationHeader = styled.div`
display: flex;
padding:  1rem 0;
flex-direction: column;
`

export const InformationBody = styled.div`
display: flex;
padding: 3rem 0 2rem 0 ;
flex-direction: row;
border-bottom: 1px solid lightgray;

.titles-container{
    display: flex;
    flex-direction: column;
}
`

export const InformationFooter = styled.div`
display: flex;
padding: 3rem 0 0 0;
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

export const OffersContainer = styled.div`
display: flex;
flex-direction: column;
padding:  0 0 4rem 0 ;
border-bottom: 1px solid lightgray;

.offersHeader{
    color: #808080cc;
    font-weight: bold;
    padding: 2rem 0 3rem 0;
};
`

export const OffersGrid = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 gap: 1rem;

 .amenity{
    display: flex;
    align-items: center;
 }
`
export const CalendarContainer = styled.div`
border-bottom: 1px solid lightgray;
width: 100%;
padding-bottom: 3rem;

.Calendars{
    display: flex;
    align-items: center;
    flex-direction: row;
}

`

export const ReviewSection = styled.div`
display: grid;
grid-template-columns: auto auto;
padding: 3rem 0 0 0 ;

.reviewContainer{

}

`