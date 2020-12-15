import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import PageTemplate from 'templates/PageTemplate/PageTemplate';
import NavigationStateProvider from 'providers/NavigationStateProvider/NavigationStateProvider';
import CartProvider from 'providers/CartProvider/CartProvider';

import ToastContainer from 'components/organisms/ToastContainer/ToastContainer';

import GlobalStyled from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/mainTheme';
import { useWindowSize } from 'hooks/useWindowSize';

const MainTemplate = ({ children, location }) => {
  const { height } = useWindowSize();

  useEffect(() => {
    const vh = height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [height]);

  return (
    <CartProvider>
      <NavigationStateProvider location={location}>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <PageTemplate>{children}</PageTemplate>
          <ToastContainer />
        </ThemeProvider>
      </NavigationStateProvider>
    </CartProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  location: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    .isRequired,
};

export default MainTemplate;
