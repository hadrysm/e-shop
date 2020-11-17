import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyled from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainTemplate;
