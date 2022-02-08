// styles/index.js
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
  --white: hsl(0, 0%, 100%);
  --eucalyptus: hsl(157, 74%, 62%);
  --martinique: hsl(225, 26%, 23%);

  --bg: hsl(224, 35%, 11%);

  --waikawa: hsl(225, 21%, 45%);
  --periwinkle: hsl(225, 40%, 83%);

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
    /* margin: 0; */
    /* padding: 0; */
    background: var(--bg);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    /* height: 100vh; */

  }
}
`;
