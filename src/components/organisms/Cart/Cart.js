import React from 'react';

import Headline from 'components/atoms/Headline/Headline';
import CTA from 'components/atoms/CTA/CTA';
import CartItemList from 'components/molecules/CartItemList/CartItemList';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Wrapper, SummaryBox, Flex, PriceTag, Title } from './Cart.style';

const Cart = () => {
  const { totalPrice } = useShoppingCart();

  return (
    <Wrapper>
      <Headline text="twój koszyk" />
      {/* import from './Cart.style'  */}
      {/* <Message>twój koszyk jest pusty</Message> */}
      <CartItemList />
      <SummaryBox>
        <Flex>
          <Flex withMargin="0 0 2rem">
            <Title>Suma końcowa</Title>
            <PriceTag>{totalPrice}zł</PriceTag>
          </Flex>
          <CTA isButton>Przejdź do płatności</CTA>
        </Flex>
      </SummaryBox>
    </Wrapper>
  );
};

export default Cart;
