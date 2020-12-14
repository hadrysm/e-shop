import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 10rem auto 4rem;
  padding: 0 1rem;

  ${({ theme }) => theme.mq.bigTablet} {
    margin-top: 18rem;
    padding: 0 3rem;
  }
`;

export const SummaryBox = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  ${({ withMargin }) =>
    withMargin &&
    css`
      margin: ${withMargin};
    `}
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.colors.grey100};
  margin-bottom: 0.5rem;
`;

export const PriceTag = styled.span`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Message = styled.p`
  margin-top: 5rem;
  font-size: ${({ theme }) => theme.font.size.m};

  ::first-letter {
    text-transform: uppercase;
  }

  ::after {
    content: '';
    margin-top: 1.5rem;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
