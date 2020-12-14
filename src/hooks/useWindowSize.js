import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const getSize = () => {
    return {
      width: typeof window !== 'undefined' && window.innerWidth,
      height: typeof window !== 'undefined' && window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
