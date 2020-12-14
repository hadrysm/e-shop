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

  const vw = typeof window !== 'undefined' && window.innerWidth;
  const vh = typeof window !== 'undefined' && window.innerHeight;

  box.style.zIndex = '999999';
  box.style.position = 'fixed';
  box.style.bottom = 0;
  box.style.backgroundColor = bgColor;
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  body.appendChild(box);
  return { box, body, vh };
};

export const splitTextToChars = node => {
  const { textContent } = node;
  const textSplit = textContent.split('');

  const frag = document.createDocumentFragment();
  textSplit.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style = `${letter === ' ' ? 'min-width: 1rem;' : ''}z-index: ${
      textSplit.length - i
    }; position: relative; display: inline-block;`;
    frag.appendChild(span);
  });
  // eslint-disable-next-line
  node.textContent = null;
  node.appendChild(frag);

  return node.children;
};
