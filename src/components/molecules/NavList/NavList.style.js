import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  padding: 3rem 0;

  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
  }
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: center;
    padding: 2rem 0;
    margin: 0 auto;
  }
`;

export const Item = styled.li`
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
