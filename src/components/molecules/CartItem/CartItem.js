import React from 'react';
import PropTypes from 'prop-types';

import Icons from 'assets/icons';

import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { getFormatCurrency } from 'helpers/cart';

import {
  Wrapper,
  InnerWrapper,
  StyledImage,
  ImageWrapper,
  Paragraph,
  Quantity,
  Box,
  Price,
  Button,
} from './CartItem.style';

const CartItem = ({ id, name, price, size, quantity, image: fluid }) => {
  const { decrementItem, removeItem, incrementItem } = useShoppingCart();
  const totalPrice = getFormatCurrency(price * quantity);
  const formatedPrice = getFormatCurrency(price);

  return (
    <Wrapper key={id}>
      <InnerWrapper grow={4}>
        <ImageWrapper>
          <StyledImage fluid={fluid} alt={name} title={name} />
        </ImageWrapper>
        <Box>
          <Paragraph>{name}</Paragraph>
          <span>|</span>
          <Paragraph>{size}</Paragraph>
        </Box>
      </InnerWrapper>

      <InnerWrapper grow={2}>
        <Box>
          <CTA as={Button} isButton onClick={() => decrementItem(id)}>
            <Icons.FaMinus />
          </CTA>
          <Quantity>{quantity}</Quantity>
          <CTA as={Button} isButton onClick={() => incrementItem(id)}>
            <Icons.FaPlus />
          </CTA>
        </Box>

        <Box isColumn>
          <Price>{totalPrice}</Price>
          {quantity > 1 && <Price isSmall>{formatedPrice} x1</Price>}
        </Box>
      </InnerWrapper>

      <CTA isButton as={Button} isRemove onClick={() => removeItem(id)}>
        <Icons.FaTimes />
      </CTA>
    </Wrapper>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  size: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CartItem;
