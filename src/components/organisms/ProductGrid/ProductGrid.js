import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Product from 'components/molecules/Product/Product';
import ProductFilter from 'components/molecules/ProductFilter/ProductFilter';

import { GridWrapper } from './ProductGrid.style';

const ProductGrid = ({ products }) => {
  if (!products) return null;

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [products]);

  return (
    <main>
      <ProductFilter />
      <GridWrapper>{products.map(Product)}</GridWrapper>
    </main>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductGrid.defaultProps = {
  products: [],
};

export default ProductGrid;
