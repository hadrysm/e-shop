import styled from 'styled-components';
import { rgba } from 'polished';

const PageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  z-index: ${({ theme }) => theme.zIndex.level3};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

export default PageOverlay;
