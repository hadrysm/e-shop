import { toast } from 'react-toastify';

export const handleOnFilterProducts = text => toast.success(text);

export const sortProductByAlphabet = (products, val) => {
  if (!val) return products;

  if (val.endsWith('ASC')) return [...products].sort((a, b) => (a.name > b.name ? 1 : -1));
  return [...products].sort((a, b) => (a.name > b.name ? -1 : 1));
};

export const sortProductByPrice = (products, val) => {
  if (!val) return products;

  if (val.endsWith('ASC')) {
    return [...products].sort((a, b) => {
      const varA = a.discountPrice ? a.discountPrice : a.price;
      const varB = b.discountPrice ? b.discountPrice : b.price;

      return varA > varB ? 1 : -1;
    });
  }

  return [...products].sort((a, b) => {
    const varA = a.discountPrice ? a.discountPrice : a.price;
    const varB = b.discountPrice ? b.discountPrice : b.price;

    return varA > varB ? -1 : 1;
  });
};
