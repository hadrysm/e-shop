import React from 'react';

import Aside from 'components/molecules/Aside/Aside';
import FiltersContent from 'components/molecules/FiltersContent/FiltersContent';

import { useFilterAndSort } from 'hooks/useFilterAndSort';
import { Wrapper } from './AsideFilters.style';

const AsideFilters = () => {
  const { isFiltersVisible, hideAside } = useFilterAndSort();

  return (
    <Aside title="filtry" side="left" close={hideAside} isOpen={isFiltersVisible}>
      <Wrapper>
        <FiltersContent />
      </Wrapper>
    </Aside>
  );
};

export default AsideFilters;
