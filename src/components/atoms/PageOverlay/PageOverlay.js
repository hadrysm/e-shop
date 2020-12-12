import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const PageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  z-index: ${({ theme }) => theme.zIndex.level3};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  ${({ isNav }) =>
    isNav &&
    css`
      ${({ theme }) => theme.mq.desktop} {
        position: static;
        visibility: visible;
        max-width: auto;
        height: auto;
        background-color: transparent;
        opacity: 1;
      }
    `}
`;

export default PageOverlay;
