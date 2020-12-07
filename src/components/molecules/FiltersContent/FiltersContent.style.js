import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import CTA from 'components/atoms/CTA/CTA';

export const Button = styled(CTA)`
  transition: 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  :hover {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.secondary)};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};

      :hover {
        background-color: ${({ theme }) => lighten(0.2, theme.colors.secondary)};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export const Heading = styled.h3`
  margin: 2.5rem 0 2rem;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.font.size.s};
  font-family: ${({ theme }) => theme.font.family.primary};
  color: ${({ theme }) => theme.colors.grey100};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
`;
