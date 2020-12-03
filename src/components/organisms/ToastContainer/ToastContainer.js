import React from 'react';

import { StyledToastContainer } from './ToastContainer.style';

const WrappedToastContainer = () => (
  <StyledToastContainer
    position="top-right"
    draggable={false}
    autoClose={2000}
    closeButton={false}
    hideProgressBar
  />
);

export default WrappedToastContainer;
