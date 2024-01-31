import { useState } from 'react';
import { OnChangeArgs, ProductInCart } from '../interfaces/Interfaces';

interface shoppingCartProps {
  onProductCountChange: ({ count, product }: OnChangeArgs) => void;
  shoppingCart: {
    [key: string]: ProductInCart;
  };
}

export const useShoppingCart = (): shoppingCartProps => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
