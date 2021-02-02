import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

import { getFormatCurrency } from 'helpers/cart';

import { scaleAnimation } from 'animations';
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

const Product = ({ image: { fluid }, name, price, discountPrice, slug }) => {
  const formatedPrice = getFormatCurrency(price);
  const formatedDiscountPrice = getFormatCurrency(discountPrice);

  const imgWrapper = useRef(null);

  useEffect(() => {
    const img = imgWrapper.current.children;

    const gsapOptionsImage = {
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        scrub: 1,
      },
    };

    scaleAnimation(img, gsapOptionsImage);
  }, [imgWrapper]);

  return (
    <Wrapper>
      <CTA to={`/products/${slug}`} aria-label={`product - ${name}`}>
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
  image: PropTypes.shape({
    fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  discountPrice: PropTypes.number,
};

Product.defaultProps = {
  discountPrice: null,
};

export default Product;
