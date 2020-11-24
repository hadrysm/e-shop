import React from 'react';
import PropTypes from 'prop-types';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

import { getQuantityOptions, getSizeOptions } from 'helpers';
// import { useShoppingCart } from 'hooks/useShoppingCart';

import { Form, Box } from './ProductForm.style';

const ProductForm = ({ product }) => {
  // const { addItem } = useShoppingCart();

  return (
    <Form>
      <Box>
        <Select
          name="size"
          label="rozmiar"
          options={getSizeOptions(product.sizeArr)}
          onChange={({ target: { value } }) => console.log(value)}
        />
      </Box>
      <Box>
        <Select
          name="size"
          label="ilość"
          options={getQuantityOptions(product.quantity)}
          onChange={({ target: { value } }) => console.log(value)}
        />
      </Box>

      <CTA
        type="submit"
        isButton
        onClick={() => {
          console.log(product);
        }}
      >
        Dodaj do koszyka
      </CTA>
    </Form>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    discountPrice: PropTypes.number,
    name: PropTypes.string,
    productDescription: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    sizeArr: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }).isRequired,
};

export default ProductForm;
