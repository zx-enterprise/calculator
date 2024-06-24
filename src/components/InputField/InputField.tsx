import { FunctionComponent } from 'react';
import styles from './InputField.module.css';
import { FLOAT_SEPARATOR } from '../../utils';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const InputField: FunctionComponent<Props> = ({ value, onChange }) => {
  // const [value, setValue] = useState(propValue);

  // useEffect(() => {
  //   console.log('<InputField/> - useEffect() - value:', value);
  // }, [value]);

  // function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setValue(event.target.value);
  // }

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = event.target.value;

  //   console.log('onInputChange() - oldValue:', value, 'newValue:', newValue);

  //   setValue(newValue);
  // };

  // console.log('<InputField/> - value:', value);

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (
      ![
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        FLOAT_SEPARATOR,
        'Backspace',
        'Delete',
        '-',
      ].includes(key)
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        onKeyDown={onInputKeyDown}
      />
    </div>
  );
};

export default InputField;
