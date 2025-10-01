import styled from "styled-components";

export const FooterContainer = styled.footer`
bottom: 0;
width: 100%;
position: fixed;
background-color: #f9fafb;
color: black;
display: flex;
flex-direction: row;
border-bottom: 1px solid lightgray;
padding: 3rem 3rem;

`

export const FooterSection = styled.div`
width: 25%;
color: black;
display: flex;
flex-direction: column;
border-bottom: 1px solid lightgray;
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
position: absolute;
bottom: 0;
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
