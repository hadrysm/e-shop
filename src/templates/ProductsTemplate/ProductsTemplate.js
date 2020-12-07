import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import FiltersProvider from 'providers/FiltersProvider/FiltersProvider';

import ProductGrid from 'components/organisms/ProductGrid/ProductGrid';
import Headline from 'components/atoms/Headline/Headline';
import AsideFilters from 'components/organisms/AsideFilters/AsideFilters';

import filtersReducer from './reducer';
import {
  SHOW_ASIDE_FILTERS,
  HIDE_ASIDE_FILTERS,
  SORT_BY,
  FILTER_BY_SIZES,
  SIZES,
} from './reducer/types';

import { Wrapper } from './ProductsTemplate.style';

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
  const filtersInitialState = {
    areAsideFiltersVisible: false,
    sizes: [],
    products,
    filteredProducts: [...products],
  };

  const [filtersState, dispatch] = useReducer(filtersReducer, filtersInitialState);

  const sortBy = option =>
    dispatch({
      type: SORT_BY,
      payload: {
        option,
      },
    });

  const showAside = () =>
    dispatch({
      type: SHOW_ASIDE_FILTERS,
    });

  const hideAside = () =>
    dispatch({
      type: HIDE_ASIDE_FILTERS,
    });

  const filtrBySizes = option =>
    dispatch({
      type: FILTER_BY_SIZES,
      payload: {
        option,
      },
    });

  const includeSize = sizeValue => {
    if (filtersState.sizes.some(size => size === sizeValue)) {
      const newSizes = filtersState.sizes.filter(size => size !== sizeValue);
      dispatch({
        type: SIZES,
        payload: {
          sizes: newSizes,
        },
      });
    } else {
      dispatch({
        type: SIZES,
        payload: {
          sizes: [...filtersState.sizes, sizeValue],
        },
      });
    }
  };

  const apllyFilters = () => {
    console.log(filtersState);
  };

  // useEffect(() => {
  //   applySorting();
  // }, [filtersState.appliedFilters]);

  const catalogFilters = {
    sortBy,
    filtrBySizes,
    showAside,
    hideAside,
    sortOptions,
    includeSize,
    markedSize: filtersState.sizes,
    apllyFilters,
  };

  return (
    <Wrapper>
      <Headline text={displayName} />
      <FiltersProvider filters={catalogFilters}>
        <AsideFilters isOpen={filtersState.areAsideFiltersVisible} close={hideAside} />
        <ProductGrid products={filtersState.filteredProducts} />
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
