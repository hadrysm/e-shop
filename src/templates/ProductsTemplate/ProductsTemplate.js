import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ProductGrid from 'components/organisms/ProductGrid/ProductGrid';
import { Wrapper, Headline, Hr } from './ProductsTemplate.style';

const ProductsTemplate = ({ data: { allDatoCmsProduct, datoCmsCategory } }) => {
  const { displayName: categoryName } = datoCmsCategory;
  const { nodes: products } = allDatoCmsProduct;

  return (
    <Wrapper>
      <Headline>{categoryName}</Headline>
      <Hr />
      <ProductGrid products={products} />
    </Wrapper>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    allDatoCmsProduct(filter: { category: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        name
        price
        image {
          fluid(maxWidth: 400) {
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
