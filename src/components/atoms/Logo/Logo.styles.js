import styled from 'styled-components';

export const StyledLogo = styled.span`
  padding: 1rem;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 7px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
`;
