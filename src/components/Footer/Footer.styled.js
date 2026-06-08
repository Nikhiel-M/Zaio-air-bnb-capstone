import styled from "styled-components";

export const FooterWrapper = styled.div`
width: 100%;
position: relative;
margin-top: auto;
background-color: #f7f7f7;

@media (max-width: 768px) {
  margin-top: 0.8rem;
}
`

export const FooterContainer = styled.footer`
width: 100%;
background-color: #f9fafb;
color: black;
display: flex;
flex-direction: row;
padding: 3rem 3rem 1rem 3rem;

@media (max-width: 1024px) {
  padding: 1.8rem 1.2rem 0.7rem 1.2rem;
}

@media (max-width: 768px) {
  padding: 0.9rem 0.5rem 0.35rem 0.5rem;
}
`

export const FooterSection = styled.div`

width: 25%;
color: black;
display: flex;
flex-direction: column;
border-bottom: 1px solid lightgrey;
padding-bottom: 1rem;
min-width: 0;

@media (max-width: 1024px) {
  width: 25%;
  padding-bottom: 0.8rem;
}

@media (max-width: 768px) {
  width: 25%;
  padding-bottom: 0.6rem;
}
`
export const FooterTitle = styled.h2`
font-weight: 600;
color: black;
font-size: 1rem;
line-height: 1.25;
letter-spacing: 0.01em;
margin: 0;

@media (max-width: 1024px) {
  font-size: 0.92rem;
}

@media (max-width: 768px) {
  font-size: 0.82rem;
}
`
export const FooterSubtitle = styled.h2`
color: gray;
padding: 0.7rem 0;
font-size: 1rem;
line-height: 1.25;
font-weight: 500;
margin: 0;
letter-spacing: 0.005em;

@media (max-width: 1024px) {
  font-size: 0.82rem;
  padding: 0.34rem 0;
}

@media (max-width: 768px) {
  font-size: 0.7rem;
  padding: 0.25rem 0.25rem;
  line-height: normal;
  white-space: wrap;
}
`
export const Kicker = styled.div`
width: 100%;
background-color: #f9fafb;
display: flex;
flex-direction: row;
color: #686666ff;
justify-content: space-between;

.left{
  padding: 0.5rem 3rem;
  line-height: 1.35;
}

.right{
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
  line-height: 1.35;
}

@media (max-width: 1024px) {
  .left,
  .right {
    padding: 0.25rem 1rem;
    font-size: 0.8rem;
  }

  .right {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}

@media (max-width: 768px) {
  .left,
  .right {
    padding: 0.2rem 0.5rem;
    font-size: 0.72rem;
  }
}

.icon{
    margin: 0 0.5rem;

    @media (max-width: 768px) {
      margin: 0 0.25rem;
    }
}
`
