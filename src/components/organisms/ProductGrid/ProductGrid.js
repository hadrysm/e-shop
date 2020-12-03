import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import Product from 'components/molecules/Product/Product';
import CTA from 'components/atoms/CTA/CTA';
import Select from 'components/atoms/Select/Select';

import { GridWrapper, SortWrapper } from './ProductGrid.style';

const ProductGrid = ({ products, sortOptions }) => {
  if (!products) return null;

  return (
    <main>
      <SortWrapper>
        <CTA isButton>
          <div>
            <FontAwesomeIcon icon={faTasks} />
            <span> Filtry</span>
          </div>
        </CTA>
        <Select label="sortuj" name="sort" options={sortOptions} />
      </SortWrapper>
      <GridWrapper>{products.map(Product)}</GridWrapper>
    </main>
  );
};

ProductGrid.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.object),
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductGrid.defaultProps = {
  products: [],
  sortOptions: [],
};

export default ProductGrid;
