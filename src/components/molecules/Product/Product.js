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
} from './Product.style';

const Product = ({ id, image: { fluid }, name, price, discountPrice, slug }) => {
  console.log(discountPrice);

  return (
    <Wrapper key={id}>
      <CTA to={`/products/${slug}`}>
        <InnerWrapper>
          <ImgWrapper>
            <StyledImage fluid={fluid} alt={name} title={name} style={{ height: '100%' }} />
          </ImgWrapper>
          <ContentWrapper>
            <Name>{name}</Name>
            <Price>{price} zł</Price>
          </ContentWrapper>
        </InnerWrapper>
      </CTA>
    </Wrapper>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
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
