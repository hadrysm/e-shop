import styled from 'styled-components';

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Hr = styled.hr`
  width: 10%;
  margin-bottom: 2rem;
  height: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
