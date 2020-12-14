import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Headline from 'components/atoms/Headline/Headline';
import ProductVariants from 'components/organisms/ProductVariants/ProductVariants';

import { getFormatCurrency } from 'helpers/cart';
import { fadeInStagger } from 'animations';

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
      size: sizes,
      image: { fluid },
    },
  },
}) => {
  const containerRef = useRef(null);

  const formatedPrice = getFormatCurrency(price);
  const formatedDiscountPrice = getFormatCurrency(discountPrice);

  useEffect(() => {
    const [, , ...children] = [...containerRef.current.children];

    fadeInStagger([children]);
  }, [containerRef]);

  return (
    <Wrapper>
      <InnerWrapper>
        <ImgWrapper>
          <Image
            fluid={fluid}
            alt={name}
            title={name}
            style={{ height: '100%', width: '100%' }}
            imgStyle={{ objectFit: 'cover' }}
          />
        </ImgWrapper>
      </InnerWrapper>

      <InnerWrapper ref={containerRef}>
        <Headline text={name} />
        <Box>
          {discountPrice ? (
            <>
              <Price isPromotion={discountPrice}>{formatedPrice}</Price>
              <Price>{formatedDiscountPrice}</Price>
            </>
          ) : (
            <Price>{formatedPrice}</Price>
          )}
        </Box>

        <Box>
          <Description>{productDescription}</Description>
        </Box>

        <ProductVariants
          product={{
            id,
            discountPrice,
            name,
            productDescription,
            price,
            sizes,
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
      id: originalId
      name
      productDescription
      price
      size {
        size
      }
      discountPrice
      image {
        fluid(maxWidth: 560, maxHeight: 500) {
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
