import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'num' | 'operation' | 'reset';

// HTMLAttributes<HTMLButtonElement>>
interface ButtonProps
  extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
}

/**
 * Renders a button with a specific variant
 * @component Button
 */
const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'num',
  ...restOfProps
}) => {
  const classToRender = `${styles.button} ${styles[variant]}`;

  return (
    <button className={classToRender} {...restOfProps}>
      {children}
    </button>
  );
};

export default Button;
