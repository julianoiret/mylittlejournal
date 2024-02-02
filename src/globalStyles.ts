import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Rubik', sans-serif;
    color: #000000;
    background-color: #FFFFFF;
    padding: 0;
    margin: 0;
  }

  ul, li {
    padding: 0;
    margin: 0
  }
`;

export default GlobalStyle;