import { FunctionComponent, PropsWithChildren } from 'react';
// import './sample.css';
import stylesButton from './Button.module.css';
// import stylesDefault from '../default.module.css';

// const InternalButton = styled.button`
//   border-radius: 5px;
// `;

const Button: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const classModifier = 'btn btn-danger';
  //  Math.random() < 0.5 ? stylesDefault.bold : stylesDefault.italic;

  // const className = stylesButton.body + ' ' + classModifier;
  const className = `${stylesButton.body} ${classModifier}`;
  console.log('className:', className);

  const stylesToRender = { borderRadius: '5px' };

  return (
    <button className={className} style={stylesToRender}>
      {children}
    </button>
  );
};

export default Button;
