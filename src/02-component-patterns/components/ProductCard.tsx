import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/Interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}

export default ProductCard;
