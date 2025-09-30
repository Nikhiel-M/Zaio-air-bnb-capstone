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
    margin: 0.6rem 0.5rem 0 3rem ;
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
height: fit-content;
padding: 0.5rem 0.5rem 0.5rem 1rem;
font-size: 2rem;
color: black;
position: relative;
display: flex;
flex-direction: column;

.calender-title{
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
}

.subtitle{
    font-size: 0.8rem;
    color: gray;
    margin: 0 0 0 0.1rem;
    cursor: pointer;
    padding: 0.2rem 0;
    
    &:hover {
        color: #333;
    }
}
`;

export const CalendarModal = styled.div`
position: absolute;
z-index: 1000;
top: 100%;
left: 0;
margin-top: 10px;
width: max-content;
min-width: 350px;
`;

export const GuestDropdownModal = styled.div`
position: absolute;
z-index: 1000;
top: 100%;
right: 0;
margin-top: 10px;
background-color: white;
border-radius: 16px;
padding: 24px;
box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
min-width: 320px;
max-width: 400px;
`;

export const GuestSection = styled.div`
margin-bottom: 20px;
`;

export const GuestRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 12px;
`;

export const GuestInfo = styled.div`
h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

p {
  margin: 0;
  font-size: 14px;
  color: #717171;
}
`;

export const GuestControls = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;

export const GuestButton = styled.button`
width: 32px;
height: 32px;
border-radius: 50%;
border: 1px solid #ddd;
background-color: ${props => props.disabled ? '#f7f7f7' : 'white'};
color: ${props => props.disabled ? '#ccc' : '#222'};
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
font-size: 18px;
display: flex;
align-items: center;
justify-content: center;

&:hover:not(:disabled) {
  background-color: #f0f0f0;
}
`;

export const GuestCount = styled.span`
min-width: 20px;
text-align: center;
font-size: 16px;
`;

export const DoneButton = styled.button`
width: 100%;
padding: 12px;
background-color: #222;
color: white;
border: none;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
cursor: pointer;

&:hover {
  background-color: #333;
}
`;

export const DoneButtonContainer = styled.div`
border-top: 1px solid #ddd;
padding-top: 16px;
margin-top: 16px;
`;