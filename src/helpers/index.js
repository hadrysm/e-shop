export const getQuantityOptions = num => {
  const quantity = new Array(num).fill(0).reduce((acc, item, index) => {
    acc.push({
      value: item + index + 1,
      displayValue: item + index + 1,
    });

    return acc;
  }, []);

  return quantity;
};

export const getSizeOptions = arr => {
  const sizeOptions = arr.reduce((acc, { size }) => {
    acc.push({
      value: size,
      displayValue: size,
    });

    return acc;
  }, []);

  return sizeOptions;
};
