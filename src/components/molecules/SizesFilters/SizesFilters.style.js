import styled from 'styled-components';
import checkIcon from 'assets/icons/checkmark.svg';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Size = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray100};
  transition: 0.2s;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const Checkmark = styled.span`
  display: block;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 3px;
  position: relative;

  ::after {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: url(${checkIcon}) center no-repeat;
    background-size: 70%;
    background-color: ${({ theme }) => theme.colors.green100};
  }
`;

export const Name = styled.span`
  display: block;
  color: inherit;
  margin-left: 1.5rem;
`;
