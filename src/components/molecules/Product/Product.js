import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

import { getFormatCurrency } from 'helpers/cart';

import { fadeInStaggerOnScroll, scaleAnimation } from 'animations';
import {
  Wrapper,
  InnerWrapper,
  ImgWrapper,
  StyledImage,
  ContentWrapper,
  Name,
  Price,
  Box,
} from './Product.style';

const Product = ({ originalId: id, image: { fluid }, name, price, discountPrice, slug }) => {
  const formatedPrice = getFormatCurrency(price);
  const formatedDiscountPrice = getFormatCurrency(discountPrice);

  const containerRef = useRef(null);
  const imgWrapper = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgWrapper.current.children;

    fadeInStaggerOnScroll(container);
    scaleAnimation(img);
  }, [containerRef]);

  return (
    <Wrapper key={id} ref={containerRef}>
      <CTA to={`/products/${slug}`}>
        <InnerWrapper>
          <ImgWrapper ref={imgWrapper}>
            <StyledImage fluid={fluid} alt={name} title={name} />
          </ImgWrapper>
          <ContentWrapper>
            <Name>{name}</Name>
            {discountPrice ? (
              <Box>
                <Price isPromotion>{formatedPrice}</Price>
                <Price as="span">{formatedDiscountPrice}</Price>
              </Box>
            ) : (
              <Price>{formatedPrice}</Price>
            )}
          </ContentWrapper>
        </InnerWrapper>
      </CTA>
    </Wrapper>
  );
};

Product.propTypes = {
  originalId: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
};

Product.defaultProps = {
  discountPrice: null,
};

export default Product;
