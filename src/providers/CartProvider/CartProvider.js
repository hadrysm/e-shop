import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { useLocalStorage } from 'hooks/useLocalStorage';
import cartReducer, { cartInitialState } from './reducer';

export const CartContext = createContext({
  value: [],
});

const CartProvider = ({ children }) => {
  const [storedCartInitialState, setStoredCart] = useLocalStorage('cart', cartInitialState);

  const [state, dispatch] = useReducer(cartReducer, storedCartInitialState);

  useEffect(() => {
    if (state.cartDetails.length > 0) setStoredCart(state);
    else setStoredCart(cartInitialState);
  }, [state]);

  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default CartProvider;
