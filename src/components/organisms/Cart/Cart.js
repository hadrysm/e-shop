import React from 'react';

import Headline from 'components/atoms/Headline/Headline';
import CTA from 'components/atoms/CTA/CTA';
import CartItemList from 'components/molecules/CartItemList/CartItemList';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { Wrapper, SummaryBox, Flex, PriceTag, Title, Message } from './Cart.style';

const Cart = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <Wrapper>
      <Headline text="twój koszyk" />

      {cartCount ? (
        <>
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
        </>
      ) : (
        <Message>twój koszyk jest pusty</Message>
      )}
    </Wrapper>
  );
};

export default Cart;
