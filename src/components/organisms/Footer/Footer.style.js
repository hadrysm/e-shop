import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  padding: 2rem;
  margin: 1rem auto 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey100};

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 5rem;
  }
`;

export const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const Box = styled.div`
  margin-bottom: 1rem;

  ${({ isCopyright }) =>
    isCopyright &&
    css`
      width: 100%;
      padding-top: 0.5rem;
      text-align: right;
      border-top: 1px solid ${({ theme }) => theme.colors.grey200};
      color: ${({ theme }) => theme.colors.grey200};
    `}
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 200px;
  text-align: center;
  text-transform: capitalize;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.grey200};
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.font.size.s};
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ isSocial }) =>
    isSocial &&
    css`
      font-size: ${({ theme }) => theme.font.size.m};
      transition: transform 0.25s ease-in-out, color 0.3s ease-in-out;

      :hover {
        transform: scale(1.2);
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
