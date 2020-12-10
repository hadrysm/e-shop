import React, { useContext } from 'react';
import InputRange from 'react-input-range';

import { FiltersContext } from 'providers/FiltersProvider/FiltersProvider';
import SizesFilters from 'components/molecules/SizesFilters/SizesFilters';
import Input from 'components/atoms/Input/Input';

import { Button, Heading, ButtonsWrapper, InputRangeWrapper } from './FiltersContent.style';

const FiltersContent = () => {
  const {
    hideAside,
    apllyFilters,
    clearFilters,
    handleSearch,
    priceRange,
    priceHandler,
  } = useContext(FiltersContext);

  const handleApply = () => {
    apllyFilters();
    hideAside();
  };

  return (
    <>
      <Input placeholder="Wyszukaj..." icon="search" onChange={e => handleSearch(e.target.value)} />
      <Heading>Rozmiary</Heading>
      <SizesFilters />
      <Heading>Cena</Heading>
      <InputRangeWrapper>
        <InputRange
          step={25}
          maxValue={250}
          minValue={0}
          value={priceRange}
          onChange={value => priceHandler(value)}
        />
      </InputRangeWrapper>
      <ButtonsWrapper>
        <Button isButton onClick={handleApply}>
          Filtruj
        </Button>
        <Button isButton secondary onClick={clearFilters}>
          Wyczyść filtry
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default FiltersContent;
