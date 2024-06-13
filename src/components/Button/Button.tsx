import { FunctionComponent, PropsWithChildren } from 'react';

const Button: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <button style={{ borderRadius: '50%' }}>{children}</button>;
};

export default Button;
