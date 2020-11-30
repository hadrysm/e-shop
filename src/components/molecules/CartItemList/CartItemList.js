import React, { useEffect, useRef } from 'react';

import CartItem from 'components/molecules/CartItem/CartItem';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { fadeInStagger } from 'animations';

import { Wrapper } from './CartItemList.style';

const CartItemList = () => {
  const { cartDetails } = useShoppingCart();

  const containerRef = useRef(null);

  useEffect(() => {
    const { children } = containerRef.current;

    fadeInStagger([...children]);
  }, []);

  return <Wrapper ref={containerRef}>{cartDetails.map(CartItem)}</Wrapper>;
};

export default CartItemList;
