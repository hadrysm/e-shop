import styled from 'styled-components';

export const Wrapper = styled.section`
  overflow: hidden;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  height: 70vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 70);
  max-height: 65rem;
`;