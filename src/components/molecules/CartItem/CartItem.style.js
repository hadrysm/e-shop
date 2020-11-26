import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

export const Wrapper = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey400};
  position: relative;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  ${({ theme }) => theme.mq.tablet} {
    flex: ${({ grow }) => grow || 'none'};
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;

  ${({ isColumn }) =>
    isColumn &&
    css`
      align-items: flex-end;
      flex-direction: column;
      margin: 0;
    `}
`;

export const ImageWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-right: 1rem;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1rem;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Price = styled.p`
  padding-right: 2rem;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.secondary};

  ${({ isSmall }) =>
    isSmall &&
    css`
      padding-top: 0.5rem;
      font-size: ${({ theme }) => theme.font.size.xs};
      color: ${({ theme }) => theme.colors.grey200};
    `}
`;

export const Quantity = styled.span`
  margin: 0 1rem;
`;

export const Button = styled.button`
  padding: 0;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey200};
  background-color: ${({ theme }) => theme.colors.grey300};
  font-size: ${({ theme }) => theme.font.size.xxs};

  ${({ isRemove }) =>
    isRemove &&
    css`
      position: absolute;
      top: -1rem;
      right: 0;
      background-color: ${({ theme }) => theme.colors.grey400};
    `}
`;
