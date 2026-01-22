import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'popins', sans-serif;
   font-weight: 100;
   font-style: normal;
 }

 html, body {
   height: 100%;
 }

 body {
   display: flex;
   flex-direction: column;
 }

 #root {
   flex: 1;
   display: flex;
   flex-direction: column;
 }
`;
 

