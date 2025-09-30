import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1rem 0 1rem 2rem;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: hsla(0, 0%, 0%, 0.28);
  position: fixed;
  top: 0;
  
  .logo {
    margin-top: 1%;
    height: 2rem;
    width: auto;
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
  margin: 0 0 2rem 0;
}

.title{
font-size: 1rem;
margin: 0 1rem;
}
`;


