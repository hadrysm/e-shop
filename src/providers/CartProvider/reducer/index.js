import { productExistInCart, updateState } from 'helpers/cart';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, DECREMENT_ITEM, INCREMENT_ITEM } from './types';

export const cartInitialState = {
  cartDetails: [],
  totalPrice: 0,
  cartCount: 0,
};

const cartReducer = (state, { type, payload }) => {
  const createProduct = product => updateState(state, [...state.cartDetails, product]);

  const removeProductFromCart = productId => {
    const cartDetails = [...state.cartDetails].filter(({ id }) => id !== productId);

    return updateState(state, cartDetails);
  };

  const updateCart = product => {
    if (!product.quantity) return removeProductFromCart(product.id);

    const cartDetails = [...state.cartDetails];
    const currItemIndex = cartDetails.findIndex(({ id }) => id === product.id);

    cartDetails.splice(currItemIndex, 1, product);

    return updateState(state, cartDetails);
  };

  const updateCurrentProduct = (productId, count) => {
    const currentProduct = [...state.cartDetails].find(({ id }) => id === productId);

    const updatedProduct = {
      ...currentProduct,
      quantity: currentProduct.quantity + count,
    };

    return updateCart(updatedProduct);
  };

  switch (type) {
    case ADD_ITEM_TO_CART:
      if (productExistInCart(state.cartDetails, payload.product))
        return updateCart(payload.product);
      return createProduct(payload.product);

    case REMOVE_ITEM_FROM_CART:
      return removeProductFromCart(payload.productId);

    case DECREMENT_ITEM:
      return updateCurrentProduct(payload.productId, -payload.count);

    case INCREMENT_ITEM:
      return updateCurrentProduct(payload.productId, payload.count);

    default:
      throw new Error('Invalid action');
  }
};

export default cartReducer;