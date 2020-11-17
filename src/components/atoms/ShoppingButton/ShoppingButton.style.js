import styled from 'styled-components';

export const Button = styled.button`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
`;

export const Counter = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green100};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;
