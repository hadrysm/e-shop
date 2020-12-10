import { useContext, useEffect } from 'react';
import { FiltersContext } from 'providers/FiltersProvider/FiltersProvider';
import {
  SORT_BY,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  FILTER_BY_SEARCH,
  HIDE_ASIDE_FILTERS,
  PRICE,
  SEARCH,
  SHOW_ASIDE_FILTERS,
  SIZES,
} from 'providers/FiltersProvider/reducer/types';

const sortOptions = [
  { value: '', displayValue: 'Proponowane' },
  { value: 'priceASC', displayValue: 'Cena, od najniższej' },
  { value: 'priceDESC', displayValue: 'Cena, od najwyższej' },
  { value: 'alphabetASC', displayValue: 'Alfabetycznie, A-Z' },
  { value: 'alphabetDESC', displayValue: 'Alfabetycznie, Z-A' },
];

export const useFilterAndSort = () => {
  const [filtersState, dispatch] = useContext(FiltersContext);

  const sortBy = option =>
    dispatch({
      type: SORT_BY,
      payload: {
        option,
      },
    });

  const includePrice = value =>
    dispatch({
      type: PRICE,
      payload: {
        value,
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

  const handleSearch = searchInputValue =>
    dispatch({
      type: SEARCH,
      payload: {
        searchInputValue,
      },
    });

  const filtrBySearch = () =>
    dispatch({
      type: FILTER_BY_SEARCH,
    });

  const clearFilters = () =>
    dispatch({
      type: CLEAR_FILTERS,
    });

  const apllyFilters = () =>
    dispatch({
      type: APPLY_FILTERS,
    });

  const showAside = () =>
    dispatch({
      type: SHOW_ASIDE_FILTERS,
    });

  const hideAside = () =>
    dispatch({
      type: HIDE_ASIDE_FILTERS,
    });

  useEffect(() => {
    filtrBySearch();
  }, [filtersState.searchInputValue]);

  return {
    showAside,
    hideAside,
    sortBy,
    includeSize,
    handleSearch,
    clearFilters,
    apllyFilters,
    priceHandler: includePrice,
    sortOptions,

    isFiltersVisible: filtersState.areAsideFiltersVisible,
    markedSize: filtersState.sizes,
    priceRange: filtersState.priceRange,
    filteredProducts: filtersState.filteredProducts,
    searchInputValue: filtersState.searchInputValue,
  };
};
