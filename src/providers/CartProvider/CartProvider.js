import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({});

export const cartTypes = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
};

const cartInitialState = {
  cartDetails: [],
  totalPrice: 0,
  cartCount: 0,
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartDetails: [...state.cartDetails, payload.product],
      };

    default:
      throw new Error('Invalid action');
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default CartProvider;
