import { useContext } from 'react';

import { CartContext, cartTypes } from 'providers/CartProvider/CartProvider';

export const useShoppingCart = () => {
  const [cart, dispatch] = useContext(CartContext);

  const { cartDetails, totalPrice, cartCount } = cart;

  const addItem = product =>
    dispatch({
      type: cartTypes.ADD_ITEM_TO_CART,
      payload: {
        product,
      },
    });

  const removeItem = productId =>
    dispatch({
      type: cartTypes.REMOVE_ITEM_FROM_CART,
      payload: {
        productId,
      },
    });

  const decrementItem = (productId, count = 1) =>
    dispatch({
      type: cartTypes.DECREMENT_ITEM,
      payload: {
        productId,
        count,
      },
    });

  const incrementItem = (productId, count = 1) =>
    dispatch({
      type: cartTypes.INCREMENT_ITEM,
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
