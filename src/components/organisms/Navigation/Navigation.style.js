import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.level2};
`;

export const Header = styled.header`
  min-height: 7rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  background-color: ${({ theme }) => rgba(theme.colors.grey100, 0.3)};
`;
