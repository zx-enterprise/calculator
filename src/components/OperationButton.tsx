import { FunctionComponent, PropsWithChildren } from 'react';
import Button from './Button/Button';

const OperationButton: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <Button variant="operation">{children}</Button>;
};

export default OperationButton;
