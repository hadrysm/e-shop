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

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    height: auto;
  }
`;

export const InnerWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.9)};
  box-shadow: ${({ theme }) => rgba(theme.colors.black, 0.3)} 1px 0px 5px 2px;
  position: relative;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    height: auto;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 7rem;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;

  ${({ theme }) => theme.mq.desktop} {
    position: static;
  }
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: center;
    padding: 2rem 0;
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    margin: 0;
  }

  ::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    transform: translateX(-120%);
    transition: transform 0.25s ease-in-out;

    ${({ theme }) => theme.mq.desktop} {
      left: 1rem;
      right: 1rem;
    }
  }

  :hover ::after {
    transform: translateX(0);
  }
`;
