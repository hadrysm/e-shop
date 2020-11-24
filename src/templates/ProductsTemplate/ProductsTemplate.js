import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ProductGrid from 'components/organisms/ProductGrid/ProductGrid';
import Headline from 'components/atoms/Headline/Headline';

import { Wrapper } from './ProductsTemplate.style';

const ProductsTemplate = ({ data: { products, category } }) => {
  const { displayName: categoryName } = category;
  const { nodes: productsItems } = products;

  return (
    <Wrapper>
      <Headline text={categoryName} />
      <ProductGrid products={productsItems} />
    </Wrapper>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    products: allDatoCmsProduct(filter: { category: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        slug
        id
        name
        price
        discountPrice
        image {
          fluid(maxWidth: 560) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
    category: datoCmsCategory(id: { eq: $id }) {
      displayName
    }
  }
`;

ProductsTemplate.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object),
    }),
    category: PropTypes.shape({
      displayName: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsTemplate;
