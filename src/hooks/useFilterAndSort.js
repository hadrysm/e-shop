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
  SORT_PRODUCTS,
} from 'providers/FiltersProvider/reducer/types';

const sortOptions = [
  { value: '', displayValue: 'Wybierz...' },
  { value: 'priceASC', displayValue: 'Cena, od najniższej' },
  { value: 'priceDESC', displayValue: 'Cena, od najwyższej' },
  { value: 'alphabetASC', displayValue: 'Alfabetycznie, A-Z' },
  { value: 'alphabetDESC', displayValue: 'Alfabetycznie, Z-A' },
];

export const useFilterAndSort = () => {
  const [
    { areAsideFiltersVisible, sizes, searchInputValue, priceRange, filteredProducts, sortBy },
    dispatch,
  ] = useContext(FiltersContext);

  const handleSortBy = option =>
    dispatch({
      type: SORT_BY,
      payload: {
        option,
      },
    });

  const handleIncludePrice = value =>
    dispatch({
      type: PRICE,
      payload: {
        value,
      },
    });

  const handleIncludeSize = sizeValue => {
    if (sizes.some(size => size === sizeValue)) {
      const newSizes = sizes.filter(size => size !== sizeValue);
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
          sizes: [...sizes, sizeValue],
        },
      });
    }
  };

  const handleSearch = value =>
    dispatch({
      type: SEARCH,
      payload: {
        searchInputValue: value,
      },
    });

  const handleFiltrBySearch = () =>
    dispatch({
      type: FILTER_BY_SEARCH,
    });

  const handleSortProducts = () =>
    dispatch({
      type: SORT_PRODUCTS,
    });

  const handleClearFilters = () =>
    dispatch({
      type: CLEAR_FILTERS,
    });

  const handleApllyFilters = () =>
    dispatch({
      type: APPLY_FILTERS,
    });

  const handleShowAside = () =>
    dispatch({
      type: SHOW_ASIDE_FILTERS,
    });

  const handleHideAside = () =>
    dispatch({
      type: HIDE_ASIDE_FILTERS,
    });

  useEffect(() => {
    handleFiltrBySearch();
  }, [searchInputValue]);

  useEffect(() => {
    handleSortProducts();
  }, [sortBy]);

  return {
    handleShowAside,
    handleHideAside,
    handleSortBy,
    handleIncludeSize,
    handleSearch,
    handleClearFilters,
    handleApllyFilters,
    handleIncludePrice,
    sortOptions,

    isFiltersVisible: areAsideFiltersVisible,
    markedSize: sizes,
    priceRange,
    filteredProducts,
    searchInputValue,
    sortByValue: sortBy,
  };
};
