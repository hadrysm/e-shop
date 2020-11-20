import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const ProductsTemplate = ({ data: { allDatoCmsProduct, datoCmsCategory } }) => {
  const { displayName: categoryName } = datoCmsCategory;
  const { nodes: products } = allDatoCmsProduct;

  console.log(products);

  return (
    <div>
      <h1>{categoryName}</h1>
    </div>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    allDatoCmsProduct(filter: { category: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        name
        price
        slug
        image {
          fluid(maxWidth: 1000) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
    datoCmsCategory(id: { eq: $id }) {
      displayName
    }
  }
`;

ProductsTemplate.propTypes = {
  data: PropTypes.shape({
    allDatoCmsProduct: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object),
    }),
    datoCmsCategory: PropTypes.shape({
      displayName: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsTemplate;
