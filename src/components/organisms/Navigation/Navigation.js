import React from 'react';

import Logo from 'components/atoms/Logo/Logo';

const Navigation = () => {
  return (
    <header>
      <button type="button">burger</button>
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
