import React from 'react';

import Logo from 'components/atoms/Logo/Logo';
import Burger from 'components/atoms/Burger/Burger';
import ShoppingButton from 'components/atoms/ShoppingButton/ShoppingButton';

import { Wrapper, Header } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <Header>
        <Burger />
        <Logo />
        {/* <nav>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
        </ul>
      </nav> */}
        <ShoppingButton />
      </Header>
    </Wrapper>
  );
};

export default Navigation;
