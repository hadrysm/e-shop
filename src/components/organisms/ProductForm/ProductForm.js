import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import Select from 'components/atoms/Select/Select';
import CTA from 'components/atoms/CTA/CTA';

import { useShoppingCart } from 'hooks/useShoppingCart';
import { getQuantityOptions, getSizeOptions } from 'helpers';

import { Form, Box } from './ProductForm.style';

const ProductForm = ({ product: { id, name, price, discountPrice, sizes, image } }) => {
  const { addItem } = useShoppingCart();

  const { values, handleChange, handleSubmit, isSubmitting, setSubmitting } = useFormik({
    initialValues: {
      size: sizes[0].size,
      quantity: 1,
    },
    onSubmit: ({ size, quantity: quant }) => {
      addItem({
        id: `${id}${size}`,
        name,
        price: discountPrice || price,
        size,
        quantity: parseInt(quant, 10),
        image,
      });
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <Select
          name="size"
          label="rozmiar"
          value={values.size}
          options={getSizeOptions(sizes)}
          onChange={e => {
            handleChange(e);
            setSubmitting(false);
          }}
        />
      </Box>
      <Box>
        <Select
          name="quantity"
          label="ilość"
          value={values.quantity}
          options={getQuantityOptions(10)}
          onChange={e => {
            handleChange(e);
            setSubmitting(false);
          }}
        />
      </Box>

      <CTA type="submit" isButton>
        {isSubmitting ? <span>Dodano</span> : <span>Dodaj do koszyka</span>}
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
    image: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }).isRequired,
};

export default ProductForm;
