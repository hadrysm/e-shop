import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Box, Counter } from './ShoppingButton.style';

const ShoppingButton = () => {
  const { cartCount } = useShoppingCart();

  return (
    <CTA to="/cart">
      <Box>
        <FontAwesomeIcon icon={faShoppingCart} />
        {!!cartCount && <Counter>{cartCount}</Counter>}
      </Box>
    </CTA>
  );
};

export default ShoppingButton;
