import React from 'react';
import PropTypes from 'prop-types';

import Product from 'components/molecules/Product/Product';
import { GridWrapper } from './ProductGrid.style';

const ProductGrid = ({ products }) => {
  if (!products) return null;
  return <GridWrapper>{products.map(Product)}</GridWrapper>;
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductGrid.defaultProps = {
  products: [],
};

export default ProductGrid;
