import {
  sortProductByAlphabet,
  sortProductByPrice,
  handleOnFilterProducts,
} from 'helpers/sortAndFilters';
import {
  SORT_BY,
  SHOW_ASIDE_FILTERS,
  HIDE_ASIDE_FILTERS,
  FILTER_BY_SIZES,
  FILTER_BY_SEARCH,
  SIZES,
  SEARCH,
  CLEAR_FILTERS,
} from './types';

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

  const filterProductsBy = ({ filterBy }) => {
    const { sizes, products, searchInputValue } = { ...state };

    if (filterBy === 'sizes') {
      if (!sizes.length) return { ...state, filteredProducts: products };

      const filteredProducts = [...products].filter(product =>
        product.size.some(({ size }) => sizes.includes(size)),
      );
      handleOnFilterProducts('Pomyślnie przefiltrowano produkty!');

      return {
        ...state,
        filteredProducts: [...filteredProducts],
      };
    }
    if (filterBy === 'search') {
      if (!searchInputValue) return { ...state, filteredProducts: products };

      const value = searchInputValue.toLowerCase();
      const filteredProducts = [...products].filter(({ name }) =>
        name.toLowerCase().includes(value),
      );

      return {
        ...state,
        filteredProducts: [...filteredProducts],
      };
    }

    return {
      ...state,
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

    case SEARCH:
      return {
        ...state,
        searchInputValue: payload.searchInputValue,
      };

    case FILTER_BY_SIZES:
      return filterProductsBy({ filterBy: 'sizes' });

    case FILTER_BY_SEARCH:
      return filterProductsBy({ filterBy: 'search' });

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

    case CLEAR_FILTERS:
      handleOnFilterProducts('Pomyślnie wyczyszczono filtry!');

      return {
        ...state,
        sizes: [],
        searchInputValue: '',
        products: [...state.products],
        filteredProducts: [...state.products],
      };

    default:
      throw new Error('Invalid action');
  }
};

export default filtersReducer;
