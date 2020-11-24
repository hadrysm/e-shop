import React from 'react';

import CartItem from 'components/molecules/CartItem/CartItem';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Wrapper } from './CartItem.style';

const products = [
  {
    id: 0,
    price: 50,
    discountPrice: 44,
    image: '',
    name: 'kurtka puchowa',
  },
  {
    id: 1,
    price: 22,
    discountPrice: null,
    image: '',
    name: 'spodnie',
  },
];

const CartItemList = () => {
  const { cartDetails } = useShoppingCart();
  console.log(cartDetails);

  return <Wrapper>{products.map(CartItem)}</Wrapper>;
};

export default CartItemList;
