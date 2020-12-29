import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const Main = styled.main`
  overflow: hidden;
`;
