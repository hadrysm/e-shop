import styled from 'styled-components';

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content(40%);
  gap: 1rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.bigTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
