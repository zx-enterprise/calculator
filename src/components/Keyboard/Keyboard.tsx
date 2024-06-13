import Button from '../Button';

const Keyboard = () => {
  return (
    <div id="keyboard" style={{ border: '1px dotted lime' }}>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </div>
      <div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
      </div>
      <div>
        <Button>0</Button>
        <Button>C</Button>
        <Button>=</Button>
        <Button>/</Button>
      </div>
    </div>
  );
};

export default Keyboard;
