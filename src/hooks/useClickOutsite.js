import { useEffect } from 'react';

const useClickOutsite = (ref, callback) => {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      callback(false);
    };

    document.addEventListener('mousedown', listener);

    return () => document.removeEventListener('mousedown', listener);
  }, [ref, callback]);
};

export default useClickOutsite;
