import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  background-color: pink;
  height: 70vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 70);
  max-height: 65rem;
  padding: 0 2rem;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

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
    position: relative;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.l};
    letter-spacing: 5px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.level3};

    ${({ theme }) => theme.mq.bigTablet} {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }
`;
