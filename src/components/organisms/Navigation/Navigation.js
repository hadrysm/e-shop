import React, { useContext } from 'react';

import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Burger from 'components/atoms/Burger/Burger';
import ShoppingButton from 'components/atoms/ShoppingButton/ShoppingButton';

import { NavigationStateContext } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { Wrapper, Header } from './Navigation.style';

const Navigation = () => {
  const { toggleMenuVisibility, isMenuOpen } = useContext(NavigationStateContext);

  return (
    <Wrapper>
      <Header>
        <Burger onClick={toggleMenuVisibility} isMenuOpen={isMenuOpen} />
        <Logo />
        <NavList isMenuOpen={isMenuOpen} />
        <ShoppingButton />
      </Header>
    </Wrapper>
  );
};

export default Navigation;
