import { PRICE } from './types';

export const filtersInitialState = {};

const filtersReducer = (state, { type, payload }) => {
  switch (type) {
    case PRICE:
      return {
        ...state,
        priceRange: payload,
      };

    default:
      throw new Error('Invalid action');
  }
};

export default filtersReducer;
