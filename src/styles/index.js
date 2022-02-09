// styles/index.js
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
  --header: hsl(0, 0%, 100%);
  --header-secondary: hsl(157, 74%, 62%);
  --form-bg: hsl(225, 26%, 23%);
  --bg: hsl(224, 35%, 11%);
  --company-logo: hsl(225, 21%, 45%);
  --paragraph: hsl(225, 40%, 83%);

  --header-size: 1.375rem;
  --paragraph-size: 0.9375rem;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: var(--bg);
    font-family: 'Chivo', sans-serif;
  }

  h1, p {
    margin: 0;
  }


`;
