import { FunctionComponent } from 'react';

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
  //   setValue(event.target.value);
  //   console.log(
  //     'onInputChange() - oldValue:',
  //     value,
  //     'newValue:',
  //     event.target.value
  //   );
  // };

  // console.log('<InputField/> - value:', value);
  return <input value={value} onChange={onChange} />;
};

export default InputField;
