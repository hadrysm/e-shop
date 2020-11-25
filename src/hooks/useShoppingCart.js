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

  return {
    cartDetails,
    totalPrice,
    cartCount,
    addItem,
  };
};
