import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Button, Counter } from './ShoppingButton.style';

const ShoppingButton = () => {
  return (
    <Button type="button">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Counter>0</Counter>
    </Button>
  );
};

export default ShoppingButton;
