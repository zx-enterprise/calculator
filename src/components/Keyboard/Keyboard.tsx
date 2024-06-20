import { FunctionComponent, MouseEvent } from 'react';
import Button from '../Button';

type Props = {
  onButtonClick: (key: string) => void;
};

const Keyboard: FunctionComponent<Props> = ({ onButtonClick }) => {
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const key = event?.target?.textContent;
    // const key = event && event.target && event.target.textContent;
    onButtonClick(key);
  };

  return (
    <div id="keyboard" style={{ border: '1px dotted lime' }}>
      <div>
        <Button onClick={handleButtonClick}>1</Button>
        <Button onClick={handleButtonClick}>2</Button>
        <Button onClick={handleButtonClick}>3</Button>
        <Button variant="operation" onClick={handleButtonClick}>
          +
        </Button>
      </div>
      <div>
        <Button onClick={handleButtonClick}>4</Button>
        <Button onClick={handleButtonClick}>5</Button>
        <Button onClick={handleButtonClick}>6</Button>
        <Button variant="operation" onClick={handleButtonClick}>
          -
        </Button>
      </div>
      <div>
        <Button onClick={handleButtonClick}>7</Button>
        <Button onClick={handleButtonClick}>8</Button>
        <Button onClick={handleButtonClick}>9</Button>
        <Button variant="operation" onClick={handleButtonClick}>
          *
        </Button>
      </div>
      <div>
        <Button onClick={handleButtonClick}>0</Button>
        <Button onClick={handleButtonClick}>.</Button>
        <Button variant="reset" onClick={handleButtonClick}>
          C
        </Button>
        <Button variant="operation" onClick={handleButtonClick}>
          =
        </Button>
        <Button variant="operation" onClick={handleButtonClick}>
          /
        </Button>
      </div>
    </div>
  );
};

export default Keyboard;
