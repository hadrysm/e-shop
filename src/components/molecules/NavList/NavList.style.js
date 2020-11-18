import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  z-index: ${({ theme }) => theme.zIndex.level7};
`;

export const InnerWrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.9)};
  box-shadow: ${({ theme }) => rgba(theme.colors.black, 0.3)} 1px 0px 5px 2px;
  position: relative;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 7rem;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const Item = styled.li`
  margin-bottom: 3rem;
  padding-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.xs};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    transform: translateX(-110%);
    transition: transform 0.25s ease-in-out;
  }

  :hover ::after {
    transform: translateX(0);
  }
`;
