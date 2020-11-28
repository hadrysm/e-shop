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

export const createBox = bgColor => {
  const { body } = document;

  const box = document.createElement('div');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  box.style.zIndex = '999999';
  box.style.position = 'fixed';
  box.style.bottom = 0;
  box.style.backgroundColor = bgColor;
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  body.appendChild(box);
  return { box, body, vh };
};
