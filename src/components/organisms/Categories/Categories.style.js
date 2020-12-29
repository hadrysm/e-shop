import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 3rem auto 0;
  padding: 0.5rem;

  ${({ theme }) => theme.mq.bigTablet} {
    display: flex;
    flex-direction: column;
    margin: 6rem auto 0;
  }
`;
