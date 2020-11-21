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

const Product = ({ id, image: { fluid }, name, price }) => {
  return (
    <Wrapper key={id}>
      <CTA to={name}>
        <InnerWrapper>
          <ImgWrapper>
            <StyledImage fluid={fluid} alt={name} title={name} />
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
};

export default Product;
