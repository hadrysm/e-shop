import React from 'react';

import Icons from 'assets/icons';

import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Box, Counter } from './ShoppingButton.style';

const ShoppingButton = () => {
  const { cartCount } = useShoppingCart();

  return (
    <CTA to="/cart">
      <Box>
        <Icons.FaShoppingCart />
        {!!cartCount && <Counter>{cartCount}</Counter>}
      </Box>
    </CTA>
  );
};

export default ShoppingButton;
