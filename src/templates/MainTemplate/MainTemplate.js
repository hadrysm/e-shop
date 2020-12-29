import React, { useEffect, useState } from 'react';
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

const DELAY_PAGE_TRANSITION = 1000;
const INITIAL_CONTAINING_BLOCK = 0.01;

const MainTemplate = ({ children, location }) => {
  const { height } = useWindowSize();
  const [vh, setVh] = useState(height * INITIAL_CONTAINING_BLOCK);

  useEffect(() => {
    setVh(height * INITIAL_CONTAINING_BLOCK);
  }, [height]);

  useEffect(() => {
    const idTimeout = setTimeout(() => window.scrollTo(0, 0), DELAY_PAGE_TRANSITION);

    return clearTimeout(idTimeout);
  }, [location]);

  return (
    <CartProvider>
      <NavigationStateProvider location={location}>
        <ThemeProvider theme={{ ...theme, vh }}>
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
