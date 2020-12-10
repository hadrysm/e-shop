import React from 'react';
import InputRange from 'react-input-range';
import { handleOnFilterProducts } from 'helpers/sortAndFilters';

import SizesFilters from 'components/molecules/SizesFilters/SizesFilters';
import Input from 'components/atoms/Input/Input';

import { useFilterAndSort } from 'hooks/useFilterAndSort';

import { Button, Heading, ButtonsWrapper, InputRangeWrapper } from './FiltersContent.style';

const FiltersContent = () => {
  const {
    hideAside,
    apllyFilters,
    clearFilters,
    handleSearch,
    priceRange,
    priceHandler,
    searchInputValue,
  } = useFilterAndSort();

  const handleApply = () => {
    apllyFilters();
    hideAside();
    handleOnFilterProducts('Pomyślnie przefiltrowano produkty!');
  };

  const handleClear = () => {
    clearFilters();
    handleOnFilterProducts('Pomyślnie wyczyszczono filtry!');
  };

  return (
    <>
      <Input
        placeholder="Wyszukaj..."
        icon="search"
        value={searchInputValue}
        onChange={e => handleSearch(e.target.value)}
      />
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
        <Button isButton secondary onClick={handleClear}>
          Wyczyść filtry
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default FiltersContent;
