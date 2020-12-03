import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ProductGrid from 'components/organisms/ProductGrid/ProductGrid';
import Headline from 'components/atoms/Headline/Headline';

import { Wrapper } from './ProductsTemplate.style';

// import filtersReducer, { filtersInitialState } from './reducer';

const sortOptions = [
  { value: '', displayValue: 'Proponowane' },
  { value: 'priceASC', displayValue: 'Cena, od najniższej' },
  { value: 'priceDESC', displayValue: 'Cena, od najwyższej' },
  { value: 'alphabetASC', displayValue: 'Alfabetycznie, A-Z' },
  { value: 'alphabetDESC', displayValue: 'Alfabetycznie, Z-A' },
];

const ProductsTemplate = ({
  data: {
    products: { nodes: products },
    category: { displayName },
  },
}) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  // for husky
  console.log(setSortedProducts);

  // const [filters, dispatch] = useReducer(filtersReducer, filtersInitialState);

  return (
    <Wrapper>
      <Headline text={displayName} />
      <ProductGrid products={sortedProducts} sortOptions={sortOptions} />
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
