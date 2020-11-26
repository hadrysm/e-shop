import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { productExistInCart, getTotalPrice, getTotalCartCount } from 'helpers/cart';

export const CartContext = createContext({});

export const cartTypes = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
};

const cartInitialState = {
  cartDetails: [],
  totalPrice: 0,
  cartCount: 0,
};

const cartReducer = (state, { type, payload }) => {
  const removeProductFromCart = productId => {
    const cartDetails = [...state.cartDetails].filter(({ id }) => id !== productId);

    return {
      ...state,
      cartDetails: [...cartDetails],
      totalPrice: getTotalPrice(cartDetails),
      cartCount: getTotalCartCount(cartDetails),
    };
  };

  const updateCart = product => {
    if (!product.quantity) return removeProductFromCart(product.id);

    const cartDetails = [...state.cartDetails];
    const currItemIndex = cartDetails.findIndex(prod => prod.id === product.id);

    cartDetails.splice(currItemIndex, 1, product);

    return {
      ...state,
      cartDetails,
      totalPrice: getTotalPrice(cartDetails),
      cartCount: getTotalCartCount(cartDetails),
    };
  };

  const createProductInCart = product => {
    const cartDetails = [...state.cartDetails, product];

    return {
      ...state,
      cartDetails,
      totalPrice: getTotalPrice(cartDetails),
      cartCount: getTotalCartCount(cartDetails),
    };
  };

  const updateCurrentProductInCart = (productId, count) => {
    const currentProduct = [...state.cartDetails].find(item => item.id === productId);

    const updatedProduct = {
      ...currentProduct,
      quantity: currentProduct.quantity + count,
    };

    return updateCart(updatedProduct);
  };

  switch (type) {
    case cartTypes.ADD_ITEM_TO_CART:
      if (productExistInCart(state.cartDetails, payload.product))
        return updateCart(payload.product);
      return createProductInCart(payload.product);

    case cartTypes.REMOVE_ITEM_FROM_CART:
      return removeProductFromCart(payload.productId);

    case cartTypes.DECREMENT_ITEM:
      return updateCurrentProductInCart(payload.productId, -payload.count);

    case cartTypes.INCREMENT_ITEM:
      return updateCurrentProductInCart(payload.productId, payload.count);

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
