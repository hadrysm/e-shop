import styled, { css } from 'styled-components';

import seatchIcon from 'assets/icons/search.svg';

const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem 1rem 3rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ theme }) => theme.colors.grey400};
  border-radius: 0.5rem;
  border: 1px solid transparent;
  outline: none;

  ::placeholder {
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  :focus {
    border: 1px solid black;
  }

  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${icon});
      background-size: 15px;
      background-position: 1.5rem 50%;
      background-repeat: no-repeat;
      padding: 1rem 2rem 1rem 4rem;
    `}

  ${({ icon }) =>
    icon === 'search' &&
    css`
      background-position: 1.5rem 50%;
      background-image: url(${seatchIcon});
      padding: 1rem 2rem 1rem 4rem;
      border-radius: 5px;
    `}
`;

export default Input;
