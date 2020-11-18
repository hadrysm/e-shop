import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyled = createGlobalStyle`
  ${normalize}

 *, *::after, *::before {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.primary};
  background-color: ${({ theme }) => theme.colors.background};
}

ul {
    list-style: none;
  }

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

img {
  display: block;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyled;
