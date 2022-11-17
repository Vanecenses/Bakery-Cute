import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
      --galletita-bg: #fffeb3;
    --rosado: #e50453c9;
    --white-bg: rgba(255, 255, 255, 0.9);
    --btn-gradient: linear-gradient(50deg,#ff5b49,#fd887b );
    --magenta: #ff5b49;
    --btn-gradient-secondary: linear-gradient(140deg,#ff5b49,#fd887b );
    --rosa: rgba(255, 91, 91, 0.91);
  }

  html{
    scroll-behavior: smooth;
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #fcfcda;
    font-family: 'Montserrat', sans-serif;
    color: brown;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: brown;
    }

    li {
    list-style: none;
    }

`;
