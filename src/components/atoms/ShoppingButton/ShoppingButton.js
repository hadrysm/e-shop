import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Box, Counter } from './ShoppingButton.style';

const ShoppingButton = () => {
  const { cartCount } = useShoppingCart();

  return (
    <CTA to="/cart" aria-label="shoping cart">
      <Box>
        <FaShoppingCart />
        {!!cartCount && <Counter>{cartCount}</Counter>}
      </Box>
    </CTA>
  );
};

export default ShoppingButton;
