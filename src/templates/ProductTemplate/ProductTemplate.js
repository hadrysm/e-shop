import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

import { getQuantityOptions, getSizeOptions } from 'helpers';

import {
  Wrapper,
  InnerWrapper,
  ImgWrapper,
  ProductName,
  Box,
  Price,
  Description,
  Form,
} from './ProductTemplate.style';

const ProductTemplate = ({
  data: {
    product: {
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
        <ProductName>{name}</ProductName>
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

        <Form>
          <Box>
            <Select
              name="size"
              label="rozmiar"
              options={getSizeOptions(sizeArr)}
              onChange={({ target: { value } }) => console.log(value)}
            />
          </Box>
          <Box>
            <Select
              name="size"
              label="ilość"
              options={getQuantityOptions(quantity)}
              onChange={({ target: { value } }) => console.log(value)}
            />
          </Box>

          <CTA type="submit" isButton>
            Dodaj do koszyka
          </CTA>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
};

export const query = graphql`
  query ProductQuery($id: String!) {
    product: datoCmsProduct(id: { eq: $id }) {
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
