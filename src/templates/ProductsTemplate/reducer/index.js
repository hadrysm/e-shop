import { sortProductByAlphabet, sortProductByPrice } from 'helpers';
import { SORT_BY, SHOW_ASIDE_FILTERS, HIDE_ASIDE_FILTERS, FILTER_BY_SIZES, SIZES } from './types';

const filtersReducer = (state, { type, payload }) => {
  const sortProductsBy = option => {
    const { filteredProducts, sizes, products } = { ...state };

    if (option.startsWith('alphabet')) {
      const sortedProcusts = sortProductByAlphabet(filteredProducts, option);

      return {
        ...state,
        filteredProducts: [...sortedProcusts],
      };
    }
    if (option.startsWith('price')) {
      const sortedProcusts = sortProductByPrice(filteredProducts, option);

      return {
        ...state,
        filteredProducts: [...sortedProcusts],
      };
    }

    if (sizes.length) {
      return {
        ...state,
        filteredProducts: [...filteredProducts],
      };
    }

    return {
      ...state,
      filteredProducts: [...products],
    };
  };

  const filterProductsBy = () => {
    const { sizes, products } = { ...state };

    if (!sizes.length) return { ...state, filteredProducts: products };

    const updatedProducts = [...products].filter(product =>
      product.size.some(({ size }) => sizes.includes(size)),
    );

    return {
      ...state,
      filteredProducts: [...updatedProducts],
    };
  };

  switch (type) {
    case SORT_BY:
      return sortProductsBy(payload.option);

    case SIZES:
      return {
        ...state,
        sizes: payload.sizes,
      };

    case FILTER_BY_SIZES:
      // { filterBy: 'size' } add as argument letter
      return filterProductsBy();

    case SHOW_ASIDE_FILTERS:
      return {
        ...state,
        areAsideFiltersVisible: true,
      };

    case HIDE_ASIDE_FILTERS:
      return {
        ...state,
        areAsideFiltersVisible: false,
      };

    default:
      throw new Error('Invalid action');
  }
};

export default filtersReducer;
