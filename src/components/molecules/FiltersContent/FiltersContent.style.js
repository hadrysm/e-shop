import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import CTA from 'components/atoms/CTA/CTA';

export const Button = styled(CTA)`
  transition: 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;

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
  flex-wrap: wrap;
  margin-top: 4rem;
`;

export const InputRangeWrapper = styled.div`
  margin: 5rem 1rem;

  .input-range__slider {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -0.5rem;
    margin-top: -1.1rem;
    appearance: none;
    border-radius: 100%;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  }
  .input-range__slider:active {
    transform: scale(1.2);
  }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(111, 179, 235, 0.2);
  }
  .input-range--disabled .input-range__slider {
    background: ${({ theme }) => theme.colors.grey300};
    border: 1px solid ${({ theme }) => theme.colors.grey300};
    box-shadow: none;
    transform: none;
  }

  .input-range__slider-container {
    transition: left 0.3s ease-out;
  }

  .input-range__label {
    width: 3rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.grey200};
    font-size: ${({ theme }) => theme.font.size.xxs};
  }

  .input-range__label--min,
  .input-range__label--max {
    display: none;
  }

  .input-range__label--value {
    position: absolute;
    top: -4.5rem;
    left: -1.1rem;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .input-range__track {
    position: relative;
    background: ${({ theme }) => theme.colors.grey400};
    border-radius: 0.75rem;
    cursor: pointer;
    height: 0.75rem;
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }
  .input-range--disabled .input-range__track {
    background: ${({ theme }) => theme.colors.grey400};
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: ${({ theme }) => theme.colors.primary};
  }

  .input-range {
    height: 1.1rem;
    position: relative;
    width: 100%;
  }
`;
