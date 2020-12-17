import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 34rem;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  padding: 2rem 1rem;
  visibility: hidden;
  transform: translateX(-100%);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.level11};
  overflow: auto;
  will-change: transform;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ isNav }) =>
    isNav &&
    css`
      padding: 0 1rem;
      background-color: ${({ theme }) => rgba(theme.colors.primary, 0.9)};

      ${({ theme }) => theme.mq.desktop} {
        max-width: 100%;
        position: static;
        height: auto;
        visibility: visible;
        background-color: transparent;
        transform: translateX(0);
        transition: none;
      }
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      transform: translateX(0);
    `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 55px);
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    background-color: transparent;
    box-shadow: none;
    height: auto;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  ${({ isNav }) =>
    isNav &&
    css`
      width: 100%;
      padding-top: 1rem;

      ::after {
        height: 0.5px;
        background-color: ${({ theme }) => theme.colors.grey300};
      }

      ${({ theme }) => theme.mq.desktop} {
        display: none;
      }
    `}
`;

export const Heading = styled.h3`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme, isNav }) => (isNav ? theme.colors.grey300 : theme.colors.primary)};
`;
