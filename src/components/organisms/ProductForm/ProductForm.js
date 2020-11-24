import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

// import { useShoppingCart } from 'hooks/useShoppingCart';

import { Form, Box } from './ProductForm.style';

const ProductForm = ({ product }) => {
  // const { addItem } = useShoppingCart();

  const fromik = useFormik({
    initialValues: {
      size: product.size[0].value,
      quantity: product.quantity[0].value,
    },
    onSubmit: data => {
      console.log(data);
    },
  });

  return (
    <Form onSubmit={fromik.handleSubmit}>
      <Box>
        <Select
          name="size"
          label="rozmiar"
          value={fromik.values.size}
          options={product.size}
          onChange={fromik.handleChange}
        />
      </Box>
      <Box>
        <Select
          name="quantity"
          label="ilość"
          value={fromik.values.quantity}
          options={product.quantity}
          onChange={fromik.handleChange}
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
    discountPrice: PropTypes.number,
    name: PropTypes.string,
    productDescription: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.arrayOf(PropTypes.object),
    size: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }).isRequired,
};

export default ProductForm;
