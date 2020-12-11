import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.colors.grey200} 0%, ${theme.colors.black})`};
    opacity: 0.35;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.colors.grey200} 0%, ${theme.colors.black})`};
    opacity: 0.35;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.l};
    letter-spacing: 5px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.mq.bigTablet} {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }
`;
