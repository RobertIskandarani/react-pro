import { useState } from 'react';

interface Product {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = (): Product => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
