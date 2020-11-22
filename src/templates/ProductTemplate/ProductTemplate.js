import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

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
      id,
      name,
      productDescription,
      price,
      size: sizeArr,
      image: { fluid },
    },
  },
}) => {
  const sizeOptions = sizeArr.reduce((acc, { size }) => {
    acc.push({
      value: size,
      displayValue: size,
    });

    return acc;
  }, []);

  const quantityOptions = [1, 2, 3, 4, 5].reduce((acc, item) => {
    acc.push({
      value: item,
      displayValue: item,
    });

    return acc;
  }, []);

  console.log(id, discountPrice);

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
          <Price>{price} zł</Price>
        </Box>

        <Box>
          <Description>{productDescription}</Description>
        </Box>

        <Form>
          <Box>
            <Select
              name="size"
              label="rozmiar"
              options={sizeOptions}
              onChange={({ target: { value } }) => console.log(value)}
            />
          </Box>
          <Box>
            <Select
              name="size"
              label="ilość"
              options={quantityOptions}
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
      id
      name
      productDescription
      price
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
    product: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.objectOf]),
    ),
  }).isRequired,
};

export default ProductTemplate;
