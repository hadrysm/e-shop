import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const NavigationStateContext = createContext({
  toggleMenuVisibility: () => {},
  isMenuOpen: false,
});

const NavigationStateProvider = ({ children, location }) => {
  const [isMenuOpen, setMenuVisibility] = useState(false);
  const toggleMenuVisibility = () => setMenuVisibility(prevState => !prevState);

  useEffect(() => {
    setMenuVisibility(false);
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
        toggleMenuVisibility,
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
