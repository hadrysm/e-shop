import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const ProductTemplate = ({ data: { product } }) => {
  console.log(product);

  return <div>{product.name}</div>;
};

export const query = graphql`
  query ProductQuery($id: String!) {
    product: datoCmsProduct(id: { eq: $id }) {
      id
      name
      productDescription
      price
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
