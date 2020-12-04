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
  height: 100%;
  font-size: 62.5%;
}

body {
  height: 100%;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.primary};
  background-color: ${({ theme }) => theme.colors.background};

  &.no-scroll {
    overflow: hidden;
  }
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

#___gatsby{
  height: 100%;

}

#gatsby-focus-wrapper {
  height: 100%;
}

.tl-edges{
  overflow-x: visible;
}


::-webkit-scrollbar {
      width: 4px;

      ${({ theme }) => theme.mq.bigTablet} {
        width: 10px;
      }
    }

::-webkit-scrollbar-track {
        background: transparent;
}
::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.grey200};
}
::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.grey100};
}  

`;

export default GlobalStyled;
