import { MouseEvent } from 'react';
import Button from '../Button';

const Keyboard = () => {
  const onNumButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Num button clicked:', event?.target?.textContent);
  };

  return (
    <div id="keyboard" style={{ border: '1px dotted lime' }}>
      <div>
        <Button onClick={onNumButtonClick}>1</Button>
        <Button onClick={onNumButtonClick}>2</Button>
        <Button onClick={onNumButtonClick}>3</Button>
        <Button variant="operation">+</Button>
      </div>
      <div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button variant="operation">-</Button>
      </div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button variant="operation">*</Button>
      </div>
      <div>
        <Button>0</Button>
        <Button variant="reset">C</Button>
        <Button variant="operation">=</Button>
        <Button variant="operation">/</Button>
      </div>
    </div>
  );
};

export default Keyboard;
