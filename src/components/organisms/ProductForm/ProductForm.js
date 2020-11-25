import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';

import { Form, Box } from './ProductForm.style';

const ProductForm = ({ product: { id, name, price, discountPrice, sizes, quantity, image } }) => {
  const { addItem } = useShoppingCart();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      size: sizes[0].value,
      quantity: quantity[0].value,
    },
    onSubmit: ({ size, quantity: quant }) => {
      const product = {
        id,
        name,
        price: discountPrice || price,
        size,
        quantity: quant,
        image,
      };
      addItem(product);
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <Select
          name="size"
          label="rozmiar"
          value={values.size}
          options={sizes}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Select
          name="quantity"
          label="ilość"
          value={values.quantity}
          options={quantity}
          onChange={handleChange}
        />
      </Box>

      <CTA type="submit" isButton>
        Dodaj do koszyka
      </CTA>
    </Form>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    discountPrice: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.object),
    quantity: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }).isRequired,
};

export default ProductForm;
