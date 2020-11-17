import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Lines = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    left: 0;
  }

  ::before {
    top: -200%;
  }

  ::after {
    top: 200%;
  }
`;
