import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast--success {
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.grey400};
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.primary};
  }
`;
