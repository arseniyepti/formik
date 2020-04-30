import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    background-color: lightblue;
    font-family: 'Impact', sans-serif;
    font-size: 16px;
    display:flex;
    justify-content:center;
  }
`;

export default GlobalStyle;
