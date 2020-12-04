import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const FiltersContext = createContext({
  sortBy: () => {},
});

const FiltersProvider = ({ children, filters }) => {
  return <FiltersContext.Provider value={filters}>{children}</FiltersContext.Provider>;
};

FiltersProvider.propTypes = {
  filters: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
      ),
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      PropTypes.string,
      PropTypes.func,
    ]),
  ).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default FiltersProvider;
