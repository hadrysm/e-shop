import React from 'react';

import CartItem from 'components/molecules/CartItem/CartItem';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Wrapper } from './CartItemList.style';

const CartItemList = () => {
  const { cartDetails } = useShoppingCart();

  return <Wrapper>{cartDetails.map(CartItem)}</Wrapper>;
};

export default CartItemList;
