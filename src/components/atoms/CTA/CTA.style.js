import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
  padding: 1rem 2rem;
`;
