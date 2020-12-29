import styled, { css } from 'styled-components';

export const StyledLink = styled.button`
  font-size: inherit;
  color: 'inherit';

  ${({ isButton }) =>
    isButton &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem 2rem;
      font-family: ${({ theme }) => theme.font.family.primary};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.xs};
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 1rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme, color }) => color || theme.colors.secondary};
      transition: background-color 0.25s ease-in;
      border: 2px solid transparent;

      :focus {
        border-color: ${({ theme }) => theme.colors.green200};
      }

      :disabled {
        background-color: ${({ theme }) => theme.colors.green100};

        cursor: not-allowed;
      }
    `}

  ${({ isHyperLink }) => isHyperLink && css``}
`;
