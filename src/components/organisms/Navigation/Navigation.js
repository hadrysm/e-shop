import React from 'react';

import Logo from 'components/atoms/Logo/Logo';
import Burger from 'components/atoms/Burger/Burger';

const Navigation = () => {
  return (
    <header>
      <Burger />
      <Logo />
      <nav>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
        </ul>
      </nav>
      <button type="button">koszyk</button>
    </header>
  );
};

export default Navigation;
