import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: #FFFFFF;
    transition: all 0.30s ease-in;
    font-size: 62.5%; 
    overflow-x: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: lightgray;
}
::-webkit-scrollbar-thumb {
  background: #154F34;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #004C3F;
}

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
    }

  li {
    list-style: none;
  }

`;
