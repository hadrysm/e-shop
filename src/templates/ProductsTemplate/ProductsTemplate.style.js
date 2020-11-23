import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 10rem auto 0;
  padding: 0 1rem;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};

  ${({ theme }) => theme.mq.bigTablet} {
    margin-top: 18rem;
    padding: 0 3rem;
  }
`;

export const Headline = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Hr = styled.hr`
  width: 10%;
  margin-bottom: 3rem;
  height: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
