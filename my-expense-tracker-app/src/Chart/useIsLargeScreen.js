import { useState, useEffect } from 'react';
//checking for smaller screen display chart
export const useIsLargeScreen = (minWidth = 1024) => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const checkSize = () => {
      setIsLarge(window.innerWidth >= minWidth);
    };
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, [minWidth]);

  return isLarge;
};