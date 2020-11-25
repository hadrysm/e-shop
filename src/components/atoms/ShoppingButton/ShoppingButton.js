import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CTA from 'components/atoms/CTA/CTA';

import { Box, Counter } from './ShoppingButton.style';

const ShoppingButton = () => {
  return (
    <CTA to="/cart">
      <Box>
        <FontAwesomeIcon icon={faShoppingCart} />
        <Counter>0</Counter>
      </Box>
    </CTA>
  );
};

export default ShoppingButton;
