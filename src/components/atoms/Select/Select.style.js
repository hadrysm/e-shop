import styled from 'styled-components';

import Icons from 'assets/icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  margin: 0.5rem 0;
  position: relative;
`;
export const Label = styled.label`
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.grey400};
  border-radius: 0.5rem;
  border-color: transparent;
  outline: none;

  :focus {
    border: 1px solid black;
  }
`;

export const Option = styled.option`
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.grey400};
`;

export const Icon = styled(Icons.FaCaretDown)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 2rem;
`;
