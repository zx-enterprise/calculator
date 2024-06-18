import {
  InputField,
  Keyboard,
  // Keyboard
} from './components';

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <div style={{ maxWidth: '800px' }}>
        <InputField />
        <Keyboard />

        <button className="button">Close</button>
      </div>
    </div>
  );
}

export default App;
