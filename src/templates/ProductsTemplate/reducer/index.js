import { sortProductByAlphabet, sortProductByPrice } from 'helpers';
import { SORT_BY, SHOW_ASIDE_FILTERS, HIDE_ASIDE_FILTERS } from './types';

// const filtersInitialState = {
//   areAsideFiltersVisible: false,
//   products,
//   filteredProducts: [...products],
// };

const sortProductsBy = (state, option) => {
  const sortByState = { ...state };

  if (option.startsWith('alphabet')) {
    const sortedProcusts = sortProductByAlphabet(sortByState.products, option);

    return {
      ...sortByState,
      filteredProducts: [...sortedProcusts],
    };
  }
  if (option.startsWith('price')) {
    const sortedProcusts = sortProductByPrice(sortByState.products, option);

    return {
      ...sortByState,
      filteredProducts: [...sortedProcusts],
    };
  }

  return {
    ...sortByState,
    filteredProducts: [...sortByState.products],
  };
};

const filtersReducer = (state, { type, payload }) => {
  switch (type) {
    case SORT_BY:
      return sortProductsBy(state, payload.option);

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
