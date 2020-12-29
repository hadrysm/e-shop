import React, { useEffect } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Product from 'components/molecules/Product/Product';
import ProductFilter from 'components/molecules/ProductFilter/ProductFilter';

import { useFilterAndSort } from 'hooks/useFilterAndSort';

import { GridWrapper } from './ProductGrid.style';

const ProductGrid = () => {
  const { filteredProducts, sortBy, handleSortProducts } = useFilterAndSort();

  if (!filteredProducts) {
    return null;
  }

  useEffect(() => {
    handleSortProducts();
  }, [sortBy]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filteredProducts]);

  return (
    <main>
      <ProductFilter />
      <GridWrapper>
        {filteredProducts.map(({ originalId, ...args }) => (
          <Product key={originalId} {...args} />
        ))}
      </GridWrapper>
    </main>
  );
};

export default ProductGrid;
