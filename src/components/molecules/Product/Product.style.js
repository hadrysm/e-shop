import styled from 'styled-components';
import Image from 'gatsby-image';

export const Wrapper = styled.article`
  padding: 1.5rem;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.grey400};
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  max-height: 50rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

export const Name = styled.p`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 1px;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.colors.grey200};
`;
