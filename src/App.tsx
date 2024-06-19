import { useState } from 'react';
import {
  InputField,
  Keyboard,
  // Keyboard
} from './components';

type Operator = '' | '+' | '-' | '*' | '/';

function App() {
  const [value, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState('0');
  const [operator, setOperator] = useState<Operator>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(
      'onInputChange() - oldValue:',
      value,
      'newValue:',
      event.target.value
    );
  };

  console.log('<App/>-', prevValue, operator, value);

  return (
    <div>
      <h1>Calculator {value}</h1>
      <div style={{ maxWidth: '800px' }}>
        <InputField value={value} onChange={onChange} />

        <button
          onClick={() => {
            setPrevValue(value);
            setValue('0');
            setOperator('+');
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setPrevValue(value);
            setValue('0');
            setOperator('-');
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setPrevValue(prevValue + value);

            setValue('0');
            setOperator('');
          }}
        >
          =
        </button>

        <Keyboard />

        <InputField value={value} onChange={onChange} />

        <button className="button">Close</button>
      </div>
    </div>
  );
}

export default App;
