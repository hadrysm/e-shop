import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
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
  const totalPrice = price * quantity;

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
            <FontAwesomeIcon icon={faMinus} />
          </CTA>
          <Quantity>{quantity}</Quantity>
          <CTA as={Button} isButton onClick={() => incrementItem(id)}>
            <FontAwesomeIcon icon={faPlus} />
          </CTA>
        </Box>

        <Box isColumn>
          <Price>{totalPrice} zł</Price>
          {quantity > 1 && <Price isSmall>{price} zł x1</Price>}
        </Box>
      </InnerWrapper>

      <CTA isButton as={Button} isRemove onClick={() => removeItem(id)}>
        <FontAwesomeIcon icon={faTimes} />
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
