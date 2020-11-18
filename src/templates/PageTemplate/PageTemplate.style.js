import styled from 'styled-components';

export const Main = styled.main`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 0 auto;
  padding: 7rem 2rem 0;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 13rem 2rem 0;
  }
`;
