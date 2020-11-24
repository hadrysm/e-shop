import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Headline from 'components/atoms/Headline/Headline';
import ProductForm from 'components/organisms/ProductForm/ProductForm';

import { getQuantityOptions, getSizeOptions } from 'helpers';

import {
  Wrapper,
  InnerWrapper,
  ImgWrapper,
  Box,
  Price,
  Description,
} from './ProductTemplate.style';

const ProductTemplate = ({
  data: {
    product: {
      id,
      discountPrice,
      name,
      productDescription,
      price,
      quantity,
      size: sizeArr,
      image: { fluid },
    },
  },
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <ImgWrapper>
          <Image fluid={fluid} alt={name} title={name} style={{ height: '100%' }} />
        </ImgWrapper>
      </InnerWrapper>

      <InnerWrapper>
        <Headline text={name} />
        <Box>
          {discountPrice ? (
            <>
              <Price isPromotion={discountPrice}>{price} zł</Price>
              <Price>{discountPrice} zł</Price>
            </>
          ) : (
            <Price>{price} zł</Price>
          )}
        </Box>

        <Box>
          <Description>{productDescription}</Description>
        </Box>

        <ProductForm
          product={{
            id,
            discountPrice,
            name,
            productDescription,
            price,
            quantity: getQuantityOptions(quantity),
            size: getSizeOptions(sizeArr),
            image: fluid,
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export const query = graphql`
  query ProductQuery($id: String!) {
    product: datoCmsProduct(id: { eq: $id }) {
      id
      name
      productDescription
      price
      quantity
      size {
        size
      }
      discountPrice
      image {
        fluid(maxWidth: 560) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

ProductTemplate.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string,
      discountPrice: PropTypes.number,
      name: PropTypes.string,
      productDescription: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      size: PropTypes.arrayOf(PropTypes.object),
      image: PropTypes.objectOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductTemplate;
