import React from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

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
  return (
    <Wrapper key={id}>
      <CTA to={`/products/${slug}`}>
        <InnerWrapper>
          <ImgWrapper>
            <StyledImage fluid={fluid} alt={name} title={name} />
          </ImgWrapper>
          <ContentWrapper>
            <Name>{name}</Name>
            {discountPrice ? (
              <Box>
                <Price isPromotion>{price} zł</Price>
                <Price as="span">{discountPrice} zł</Price>
              </Box>
            ) : (
              <Price>{price} zł</Price>
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
