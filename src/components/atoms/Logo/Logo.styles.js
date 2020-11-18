import styled from 'styled-components';

export const StyledLogo = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 7px;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
  display: flex;
  align-items: center;
`;
