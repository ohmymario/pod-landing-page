// styles/index.js
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700&display=swap');
  /* font-family: 'Chivo', sans-serif; */

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
    background: var(--bg);
    font-family: 'Chivo', sans-serif;
  }
}
`;
