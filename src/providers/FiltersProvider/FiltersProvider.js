import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import filtersReducer from './reducer';

export const FiltersContext = createContext({
  value: [],
});

const FiltersProvider = ({ children, products }) => {
  const filtersInitialState = {
    areAsideFiltersVisible: false,
    priceRange: { min: 0, max: 150 },
    sizes: [],
    sortBy: '',
    searchInputValue: '',
    products: [...products],
    filteredProducts: [...products],
  };

  const [filtersState, dispatch] = useReducer(filtersReducer, filtersInitialState);

  return (
    <FiltersContext.Provider value={[filtersState, dispatch]}>{children}</FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default FiltersProvider;
