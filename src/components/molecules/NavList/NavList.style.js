import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
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
