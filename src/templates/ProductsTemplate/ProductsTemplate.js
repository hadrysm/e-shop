import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import FiltersProvider from 'providers/FiltersProvider/FiltersProvider';

import ProductGrid from 'components/organisms/ProductGrid/ProductGrid';
import Headline from 'components/atoms/Headline/Headline';
import AsideFilters from 'components/organisms/AsideFilters/AsideFilters';

import { Wrapper } from './ProductsTemplate.style';

const ProductsTemplate = ({
  data: {
    products: { nodes: products },
    category: { displayName },
  },
}) => {
  return (
    <Wrapper>
      <Headline text={displayName} />
      <FiltersProvider products={products}>
        <AsideFilters />
        <ProductGrid />
      </FiltersProvider>
    </Wrapper>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    products: allDatoCmsProduct(filter: { category: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        slug
        originalId
        name
        price
        discountPrice
        size {
          size
        }
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
