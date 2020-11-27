import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.level2};
  background-color: ${({ theme }) => rgba(theme.colors.grey100, 0.4)};

  transition: background-color 0.25s ease-in-out;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.9)};
    `};
`;

export const Header = styled.header`
  min-height: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1.5rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => `calc(${theme.layout.maxContainerWidth} + 20rem)`};

  ${({ theme }) => theme.mq.bigTablet} {
    padding-top: 1rem;
  }
`;
