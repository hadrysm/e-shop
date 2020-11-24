import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 10rem auto 0;
  padding: 0 1rem;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};

  ${({ theme }) => theme.mq.bigTablet} {
    margin-top: 18rem;
    padding: 0 3rem;
  }
`;
