import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import cartReducer, { cartInitialState } from './reducer';

export const CartContext = createContext({
  value: [],
});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default CartProvider;
