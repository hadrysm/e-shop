import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import Headline from 'components/atoms/Headline/Headline';
import CTA from 'components/atoms/CTA/CTA';
import CartItemList from 'components/molecules/CartItemList/CartItemList';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { getFormatCurrency } from 'helpers/cart';
import { scaleX } from 'animations';

import { Wrapper, SummaryBox, Flex, PriceTag, Title, Message } from './Cart.style';

const Cart = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      const container = messageRef.current;
      const [text] = container.children;

      gsap.set(text, { autoAlpha: 0 });

      scaleX(container);
      gsap.to(text, { autoAlpha: 1, delay: 1.1 });
    }
  }, [messageRef]);

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
                <PriceTag>{getFormatCurrency(totalPrice)}</PriceTag>
              </Flex>
              <CTA isButton>Przejdź do płatności</CTA>
            </Flex>
          </SummaryBox>
        </>
      ) : (
        <Message ref={messageRef}>
          <span>twój koszyk jest pusty</span>
        </Message>
      )}
    </Wrapper>
  );
};

export default Cart;
