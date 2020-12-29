import styled from 'styled-components';

export const Wrapper = styled.section`
  overflow: hidden;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: ${({ theme }) => `calc((${theme.vh}, 1vh) * 100)`};
  max-height: 65rem;
`;
