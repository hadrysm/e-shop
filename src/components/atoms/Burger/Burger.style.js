import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level8};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    display: none;
  }
`;

export const Line = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;
