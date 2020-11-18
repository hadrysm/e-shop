import React, { useContext } from 'react';

import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Burger from 'components/atoms/Burger/Burger';
import ShoppingButton from 'components/atoms/ShoppingButton/ShoppingButton';

import { NavigationStateContext } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { Wrapper, Header, InnerWrapper } from './Navigation.style';

const Navigation = () => {
  const { toggleMenuVisibility, isMenuOpen } = useContext(NavigationStateContext);

  return (
    <Wrapper>
      <Header>
        <InnerWrapper>
          <Burger onClick={toggleMenuVisibility} isMenuOpen={isMenuOpen} />
          <Logo />
          <ShoppingButton />
        </InnerWrapper>

        <NavList isMenuOpen={isMenuOpen} />
      </Header>
    </Wrapper>
  );
};

export default Navigation;
