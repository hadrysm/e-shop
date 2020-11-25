import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.level2};
  background-color: ${({ theme }) => rgba(theme.colors.grey100, 0.4)};
`;

export const Header = styled.header`
  min-height: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 4rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.mq.bigTablet} {
    padding-top: 1rem;
  }
`;
