import { SORT_BY, SHOW_ASIDE_FILTERS, HIDE_ASIDE_FILTERS } from './types';

export const filtersInitialState = {
  sortBy: '',
  areAsideFiltersVisible: false,
};

const filtersReducer = (state, { type, payload }) => {
  switch (type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: payload.option,
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
