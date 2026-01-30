import styled from "styled-components";

export const FooterWrapper = styled.div`
width: 100%;
position: relative;
margin-top: auto;
background-color: #f7f7f7;
`

export const FooterContainer = styled.footer`
width: 100%;
background-color: #f9fafb;
color: black;
display: flex;
flex-direction: row;
padding: 3rem 3rem 1rem 3rem;
`

export const FooterSection = styled.div`

width: 25%;
color: black;
display: flex;
flex-direction: column;
border-bottom: 1px solid lightgray;
padding-bottom: 1rem;
`
export const FooterTitle = styled.h2`
font-weight: 500;
color: black;
font-size: 1rem;
`
export const FooterSubtitle = styled.h2`
color: gray;
padding: 0.7rem 0;
font-size: 1rem;
`
export const Kicker = styled.div`
width: 100%;
background-color: #f9fafb;
display: flex;
flex-direction: row;
color: #686666ff;
justify-content: space-between;

.left{
  padding: 0.5rem 3rem;}

  .right{
    display: flex;
    align-items: center;
  padding: 0.5rem 3rem;}

.icon{
    margin: 0 0.5rem;
}
`
