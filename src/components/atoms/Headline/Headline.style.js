import styled from 'styled-components';

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Line = styled.span`
  display: block;
  width: 10%;
  height: 3px;
  margin-bottom: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
