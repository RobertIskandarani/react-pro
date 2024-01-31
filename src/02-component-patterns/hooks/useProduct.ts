import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/Interfaces';

interface useProductProps {
  counter: number;
  increaseBy: (value: number) => void;
}

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs): useProductProps => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};