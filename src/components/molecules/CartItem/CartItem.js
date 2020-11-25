import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import CTA from 'components/atoms/CTA/CTA';

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
          <CTA as={Button} isButton>
            <FontAwesomeIcon icon={faMinus} />
          </CTA>
          <Quantity>{quantity}</Quantity>
          <CTA as={Button} isButton>
            <FontAwesomeIcon icon={faPlus} />
          </CTA>
        </Box>

        <Price>{price} zł</Price>
      </InnerWrapper>

      <CTA isButton as={Button} isRemove onClick={() => {}}>
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
  size: PropTypes.string.isRequired,
};

export default CartItem;
