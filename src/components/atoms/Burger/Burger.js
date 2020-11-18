import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { toggleBurger } from 'animations';

import { BurgerButton, Line } from './Burger.style';

const Burger = ({ isMenuOpen, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    const lines = ref.current.children;

    toggleBurger(lines, isMenuOpen);
  }, [ref, isMenuOpen]);

  return (
    <BurgerButton type="button" ref={ref} {...props}>
      <Line />
      <Line />
      <Line />
    </BurgerButton>
  );
};

Burger.propTypes = {
  isMenuOpen: PropTypes.bool,
};

Burger.defaultProps = {
  isMenuOpen: false,
};

export default Burger;
