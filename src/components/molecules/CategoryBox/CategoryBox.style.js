import styled from 'styled-components';
import Img from 'gatsby-image';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  max-height: 30rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;

  :nth-child(even) {
    flex-direction: row-reverse;
  }

  :hover h2::after {
    transform: scale(1);
  }

  ${({ theme }) => theme.mq.bigTablet} {
    margin-bottom: 10rem;
    height: 45rem;

    align-self: flex-end;
  }
`;

export const InnerWrapper = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryName = styled.h2`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.black};
    transform: scale(0);
    transition: transform 0.25s ease-in-out;
  }
`;
