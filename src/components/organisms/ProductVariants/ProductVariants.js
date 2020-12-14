import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { getQuantityOptions, getSizeOptions } from 'helpers';
import { getProductFromCart } from 'helpers/cart';

import { Wrapper, Box } from './ProductVariants.style';

const ProductVariants = ({ product: { id, name, price, discountPrice, sizes, image } }) => {
  const [sizeValue, setSizeValue] = useState(sizes[0].size);
  const [quantityValue, setQuantityValue] = useState(1);
  const [isProuctInCart, setIsProuctInCart] = useState(false);

  const { cartDetails, addItem } = useShoppingCart();

  const handleAddItem = () => {
    addItem({
      id: `${id}${sizeValue}`,
      name,
      price: discountPrice || price,
      size: sizeValue,
      quantity: parseInt(quantityValue, 10),
      image,
    });
  };

  // check products exits in cart, if true => set button to disabled
  useEffect(() => {
    const { quantity } = getProductFromCart(cartDetails, `${id}${sizeValue}`);
    if (quantity === parseInt(quantityValue, 10)) setIsProuctInCart(true);
    else setIsProuctInCart(false);
  }, [handleAddItem, quantityValue]);

  return (
    <Wrapper>
      <Box>
        <Select
          name="size"
          label="rozmiar"
          options={getSizeOptions(sizes)}
          value={sizeValue}
          onChange={({ target: { value } }) => setSizeValue(value)}
        />
      </Box>
      <Box>
        <Select
          name="quantity"
          label="ilość"
          options={getQuantityOptions(10)}
          value={quantityValue}
          onChange={({ target: { value } }) => setQuantityValue(value)}
        />
      </Box>

      <CTA isButton onClick={handleAddItem} disabled={isProuctInCart}>
        {isProuctInCart ? <span>produkt dodany do koszyka</span> : <span>dodaj do koszyka</span>}
      </CTA>
    </Wrapper>
  );
};

ProductVariants.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    discountPrice: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }).isRequired,
};

export default ProductVariants;
