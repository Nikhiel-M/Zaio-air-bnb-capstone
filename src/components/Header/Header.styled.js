import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1rem 0 1rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 0;
  background-color: ${({$isColorChange }) => $isColorChange ? "black" : "white"};
  color:  ${({$isColorChange }) => $isColorChange ? "white" : "black"};;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  z-index: 9000;
  
  .logo {
    margin-top: 1%;
    height: 2rem;
    width: auto;
    margin-left: 1rem;
    cursor: pointer;
}
.calender-titles{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 1rem 0 0 0;
}

.header-titles{
  
  display: flex;
  flex-direction: row;
  margin: 0 0 1rem 0;
}

.title{
font-size: 1rem;
margin: 0 1rem;
}
`;

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
