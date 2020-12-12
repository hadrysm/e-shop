import {
  sortProductByAlphabet,
  sortProductByPrice,
  handleOnFilterProducts,
  handleOnClearFilterProducts,
  handleOnSortProducts,
  updateState,
} from 'helpers/sortAndFilters';

import {
  SORT_BY,
  SHOW_ASIDE_FILTERS,
  HIDE_ASIDE_FILTERS,
  FILTER_BY_SEARCH,
  SIZES,
  SEARCH,
  CLEAR_FILTERS,
  PRICE,
  APPLY_FILTERS,
  SORT_PRODUCTS,
} from './types';

const filtersReducer = (state, { type, payload }) => {
  const applyFilters = () => {
    const {
      sizes,
      products,
      priceRange: { min, max },
    } = { ...state };

    handleOnFilterProducts();

    const filteredProducts = products.filter(product => {
      const price = product.discountPrice || product.price;

      if (!sizes.length) return price >= min && price <= max;

      return product.size.some(({ size }) => sizes.includes(size)) && price >= min && price <= max;
    });

    return updateState(state, {
      filteredProducts,
      searchInputValue: '',
      areAsideFiltersVisible: false,
    });
  };

  const filterProductsBySearch = () => {
    const { products, searchInputValue, filteredProducts } = { ...state };

    if (!searchInputValue) return { ...state, filteredProducts: products };

    const value = searchInputValue.toLowerCase();
    const result = filteredProducts.filter(({ name }) => name.toLowerCase().includes(value));

    return updateState(state, { filteredProducts: result });
  };

  const sortProducts = () => {
    const { filteredProducts, sizes, products, sortBy } = { ...state };

    const dataProducts = sizes.length > 0 ? [...filteredProducts] : [...products];

    handleOnSortProducts();

    if (sortBy.startsWith('alphabet')) {
      const sortedProcusts = sortProductByAlphabet(dataProducts, sortBy);

      return updateState(state, { sortBy, filteredProducts: sortedProcusts });
    }
    if (sortBy.startsWith('price')) {
      const sortedProcusts = sortProductByPrice(dataProducts, sortBy);

      return updateState(state, { sortBy, filteredProducts: sortedProcusts });
    }

    return updateState(state, { sortBy, filteredProducts: dataProducts });
  };

  const clearFilters = () => {
    handleOnClearFilterProducts();
    return updateState(state, {
      sizes: [],
      priceRange: { min: 0, max: 150 },
      searchInputValue: '',
      sortBy: '',
      filteredProducts: [...state.products],
    });
  };

  switch (type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: payload.option,
      };

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

    case PRICE:
      return {
        ...state,
        priceRange: payload.value,
      };

    case APPLY_FILTERS:
      return applyFilters();

    case FILTER_BY_SEARCH:
      return filterProductsBySearch();

    case SORT_PRODUCTS:
      return sortProducts();

    case CLEAR_FILTERS:
      return clearFilters();

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