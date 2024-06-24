import { useState } from 'react';
import {
  InputField,
  Keyboard,
  // Keyboard
} from './components';

type Operator = '' | 'c' | '+' | '-' | '*' | '/';

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

  const onButtonClick = (typedKey: string) => {
    const key = typedKey.toLowerCase();

    console.log('onButtonClick() - key:', key);

    setValue((old) => {
      // Operations and reset
      if (key === 'c') {
        return '0';
      }

      if (key === '+' || key === '-' || key === '*' || key === '/') {
        if (operator === '') {
          setPrevValue(value);
          setOperator(key as Operator);
          return '0';
        }

        const a = parseFloat(prevValue);
        const b = parseFloat(value);
        switch (operator) {
          case '+':
            setPrevValue((a + b).toString());
            break;
          case '-':
            setPrevValue((a - b).toString());
            break;
          case '*':
            setPrevValue((a * b).toString());
            break;
          case '/':
            setPrevValue((a / b).toString());
            break;
          default:
          // do nothing
        }
      }

      // if (key == '+') {
      //   setPrevValue(parprevValue + value);
      //   return '0';
      // }

      // Filter out multiple dots
      if (old.includes('.') && key === '.') {
        return old;
      }

      // Leading zero workaround
      if (old === '0' && key !== '.') {
        return key;
      }

      // Add zero before leading dot
      if (old === '' && key === '.') {
        return '0.';
      }

      // TODO: Add more validation
      return old + key;
    });
  };

  console.log('<App/>-', prevValue, operator, value);

  return (
    <div>
      <h1>Calculator {value}</h1>
      <div style={{ maxWidth: '800px' }}>
        <InputField value={value} onChange={onChange} />
        <Keyboard currentInput={value} onButtonClick={onButtonClick} />
      </div>

      <h1>Calculator Integwr Only</h1>
      <div style={{ maxWidth: '800px' }}>
        <InputField value={value} onChange={onChange} />
        <Keyboard isIntegerOnly onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
