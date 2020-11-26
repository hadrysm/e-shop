export const productExistInCart = (cartDetails, product) => {
  const result = cartDetails.some(({ id, size }) => id === product.id && size === product.size);

  return result;
};

export const getTotalPrice = arr =>
  arr.reduce((acc, { price, quantity }) => {
    return acc + price * quantity;
  }, 0);

export const getTotalCartCount = arr =>
  arr.reduce((acc, { quantity }) => {
    return acc + quantity * 1;
  }, 0);
