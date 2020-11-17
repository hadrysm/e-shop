import React from 'react';

import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Burger from 'components/atoms/Burger/Burger';
import ShoppingButton from 'components/atoms/ShoppingButton/ShoppingButton';

import { Wrapper, Header } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <Header>
        <Burger />
        <Logo />
        <NavList />
        <ShoppingButton />
      </Header>
    </Wrapper>
  );
};

export default Navigation;
