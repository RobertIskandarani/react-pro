import {
  OnChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/Interfaces';
import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
}

export default ProductCard;
