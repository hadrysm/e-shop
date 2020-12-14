import React, { useContext } from 'react';

import { NavigationStateContext } from 'providers/NavigationStateProvider/NavigationStateProvider';

import { BurgerButton, Line } from './Burger.style';

const Burger = () => {
  const { handleCloseMenu, handleOpenMenu, isMenuOpen } = useContext(NavigationStateContext);

  return (
    <BurgerButton
      isOpen={isMenuOpen}
      type="button"
      onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
    >
      <Line />
      <Line />
      <Line />
    </BurgerButton>
  );
};

export default Burger;
