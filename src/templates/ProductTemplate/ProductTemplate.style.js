import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-height: 100%;
  margin: 10rem auto 0;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};

  ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50rem;
    margin-top: 18rem;
    padding: 0 3rem;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto 1rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 90%;
    height: 100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Box = styled.div`
  margin-bottom: 2rem;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  margin: 1rem 0;

  ${({ isPromotion }) =>
    isPromotion &&
    css`
      font-size: ${({ theme }) => theme.font.size.xs};
      color: ${({ theme }) => theme.colors.grey200};
      text-decoration: line-through;
    `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey200};
  line-height: 1.5;
  letter-spacing: 0.5px;
`;
