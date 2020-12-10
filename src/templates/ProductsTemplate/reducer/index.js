import {
  sortProductByAlphabet,
  sortProductByPrice,
  handleOnFilterProducts,
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
} from './types';

const filtersReducer = (state, { type, payload }) => {
  const applyFilters = () => {
    const {
      sizes,
      products,
      priceRange: { min, max },
    } = { ...state };

    const filteredProducts = [...products].filter(product => {
      const price = product.discountPrice ? product.discountPrice : product.price;

      if (!sizes.length) return price >= min && price <= max;

      return product.size.some(({ size }) => sizes.includes(size)) && price >= min && price <= max;
    });
    handleOnFilterProducts('Pomyślnie przefiltrowano produkty!');

    return {
      ...state,
      filteredProducts,
      searchInputValue: '',
    };
  };

  const filterProductsBySearch = () => {
    const { products, searchInputValue, filteredProducts } = { ...state };

    if (!searchInputValue) return { ...state, filteredProducts: products };

    const value = searchInputValue.toLowerCase();
    const result = [...filteredProducts].filter(({ name }) => name.toLowerCase().includes(value));

    return {
      ...state,
      filteredProducts: result,
    };
  };

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

    case PRICE:
      return {
        ...state,
        priceRange: payload.value,
      };

    case APPLY_FILTERS:
      return applyFilters();

    case FILTER_BY_SEARCH:
      return filterProductsBySearch();

    case CLEAR_FILTERS:
      handleOnFilterProducts('Pomyślnie wyczyszczono filtry!');

      return {
        ...state,
        sizes: [],
        priceRange: { min: 0, max: 150 },
        searchInputValue: '',
        products: [...state.products],
        filteredProducts: [...state.products],
      };

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
