import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1rem 0 1rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  position: relative;
  top: 0;
  background-color: ${({$isColorChange }) => $isColorChange ? "black" : "white"};
  color:  ${({$isColorChange }) => $isColorChange ? "white" : "black"};;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  z-index: 9000;
  
  .logo {
    margin-top: 0;
    height: 5rem;
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

@media (max-width: 1024px) {


  .logo {
    margin-left: 0.75rem;
  }

  .header-titles {
    margin-bottom: 0.5rem;
  }

  .title {
    margin: 0 0.6rem;
    font-size: 0.95rem;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  padding: 0.75rem 0.5rem;
  flex-wrap: wrap;
  align-items: center;

  .logo {
    margin: 0;
    height: 1.75rem;
  }

  .calender-titles {
    margin-top: 0.5rem;
    align-items: flex-start;
  }

  .header-titles {
    width: 100%;
    overflow-x: auto;
    justify-content: flex-start;
    margin: 0 0 0.4rem 15%;
    padding-bottom: 0.15rem;
  }

  .title {
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 0.82rem;
    margin: 0 0.35rem;
  }
}
`;

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 0 9rem;
width: 100%;

@media (max-width: 1200px) {
  margin-left: 4rem;
}

@media (max-width: 992px) {
  margin-left: 1.5rem;
}

@media (max-width: 768px) {
  margin: 0;
  width: 100%;
  order: 3;
}
`