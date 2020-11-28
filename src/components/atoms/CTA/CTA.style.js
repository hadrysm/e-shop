import styled, { css } from 'styled-components';

export const StyledLink = styled.button`
  display: block;
  height: 100%;
  font-size: inherit;
  color: 'inherit';

  ${({ isButton }) =>
    isButton &&
    css`
      padding: 1.5rem 2rem;
      font-family: ${({ theme }) => theme.font.family.primary};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.xs};
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 1rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.secondary};

      ${({ isSubmitting }) =>
        isSubmitting &&
        css`
          background-color: ${({ theme }) => theme.colors.green100};
        `}
    `}

  ${({ isHyperLink }) => isHyperLink && css``}
`;
