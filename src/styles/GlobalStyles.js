import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
  }
    
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
