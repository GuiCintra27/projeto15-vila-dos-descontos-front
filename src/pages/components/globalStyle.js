import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    --white: #FFFFFF;
    --body-bg-color: #FAF0E2;
    --blue: #5b83fd;
    --red: #ee5246;
  }

  html{
    font-size: 62.5%;
  }

  img {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  body {
    width: 100vw;
    color: var(--black);
    font-family: 'Roboto', sans-serif;
    font-size: clamp(14px, 1.6rem, 2vw);
    background: var(--body-bg-color);
  }
`;

export default GlobalStyle;