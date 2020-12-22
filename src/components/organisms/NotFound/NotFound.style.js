import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 10rem auto 4rem;
  padding: 0 1rem;

  ${({ theme }) => theme.mq.bigTablet} {
    margin-top: 18rem;
    padding: 0 3rem;
  }
`;
