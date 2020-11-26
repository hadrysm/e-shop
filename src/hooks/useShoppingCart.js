import { useContext } from 'react';

import { CartContext } from 'providers/CartProvider/CartProvider';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
} from 'providers/CartProvider/reducer/types';

export const useShoppingCart = () => {
  const [cart, dispatch] = useContext(CartContext);

  const { cartDetails, totalPrice, cartCount } = cart;

  const addItem = product =>
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        product,
      },
    });

  const removeItem = productId =>
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {
        productId,
      },
    });

  const decrementItem = (productId, count = 1) =>
    dispatch({
      type: DECREMENT_ITEM,
      payload: {
        productId,
        count,
      },
    });

  const incrementItem = (productId, count = 1) =>
    dispatch({
      type: INCREMENT_ITEM,
      payload: {
        productId,
        count,
      },
    });

  return {
    cartDetails,
    totalPrice,
    cartCount,
    addItem,
    removeItem,
    decrementItem,
    incrementItem,
  };
};
