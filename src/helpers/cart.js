export const productExistInCart = (cartDetails, product) => {
  const result = cartDetails.some(({ id, size }) => id === product.id && size === product.size);

  return result;
};

export const updateState = (state, cartDetails = []) => {
  const getTotalPrice = arr =>
    arr.reduce((acc, { price, quantity }) => {
      return acc + price * quantity;
    }, 0);

  const getTotalCartCount = arr =>
    arr.reduce((acc, { quantity }) => {
      return acc + quantity * 1;
    }, 0);

  return {
    ...state,
    cartDetails,
    totalPrice: getTotalPrice(cartDetails),
    cartCount: getTotalCartCount(cartDetails),
  };
};

export const getFormatCurrency = (value, currency = 'PLN', language = 'pl-PL') => {
  const number = parseInt(value, 10);
  const result = new Intl.NumberFormat(language, { style: 'currency', currency }).format(number);
  return result;
};