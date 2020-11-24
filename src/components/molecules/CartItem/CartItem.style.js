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
`;

export const ImageWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-right: 1rem;
`;

export const ProductName = styled.p`
  margin-right: auto;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
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
  background-color: ${({ theme }) => theme.colors.grey400};
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
