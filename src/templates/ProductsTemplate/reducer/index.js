import { SORT_BY } from './types';

export const filtersInitialState = {
  sortBy: '',
};

const filtersReducer = (state, { type, payload }) => {
  switch (type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: payload.option,
      };

    default:
      throw new Error('Invalid action');
  }
};

export default filtersReducer;
