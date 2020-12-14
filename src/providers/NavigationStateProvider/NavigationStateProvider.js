import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const NavigationStateContext = createContext({
  toggleMenuVisibility: () => {},
  isMenuOpen: false,
});

const NavigationStateProvider = ({ children, location }) => {
  const [isMenuOpen, setMenuVisibility] = useState(false);

  const handleCloseMenu = () => setMenuVisibility(false);
  const handleOpenMenu = () => setMenuVisibility(true);

  useEffect(() => {
    handleCloseMenu();
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <NavigationStateContext.Provider
      value={{
        handleCloseMenu,
        handleOpenMenu,
        isMenuOpen,
      }}
    >
      {children}
    </NavigationStateContext.Provider>
  );
};

NavigationStateProvider.propTypes = {
  location: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    .isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default NavigationStateProvider;
