import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 34rem;
  height: 100vh;
  visibility: hidden;
  transform: translateX(-100%);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.level11};
  overflow: auto;
  will-change: transform;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      transform: translateX(0);
    `}
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Heading = styled.h3`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
