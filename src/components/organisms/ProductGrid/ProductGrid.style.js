import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.bigTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
