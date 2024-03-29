import React, { useState, useEffect } from 'react';
import food from './food.js';

const textSize = '30vw';
const textSizeCorrect = '35vw';
const FoodName = ({ name }) => {
  return <div className='food'>{name}</div>;
};

const TextField = ({ plu, newFood }) => {
  const [input, setInput] = useState('');
  const [size, setSize] = useState(textSize);
  useEffect(() => inputRef.current.focus());
  const inputRef = React.createRef();
  const handleInput = (e) => {
    const input = e.target.value;
    if (input === plu) {
      setInput(input);
      setSize(textSizeCorrect);
      setTimeout(() => {
        setInput('');
        newFood();
        setSize(textSize);
      }, 800);
      return;
    }
    if (input.match(/[^0-9]/)) return;
    if (input.length > 5) return;
    setInput(input);
  };

  return (
    <input
      style={{ fontSize: size }}
      ref={inputRef}
      value={input}
      className='textfield'
      onChange={(e) => handleInput(e)}
    ></input>
  );
};

const Helper = ({ plu }) => {
  return (
    <div className='helper'>
      <div className='helper-plu'>{plu}</div>
    </div>
  );
};

const App = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * food.length));

  const newFood = () => {
    setIndex(Math.floor(Math.random() * food.length));
  };
  return (
    <div className='container'>
      <TextField newFood={newFood} plu={food[index].plu}></TextField>
      <FoodName name={food[index].name}></FoodName>
      <Helper plu={food[index].plu}></Helper>
    </div>
  );
};

export default App;
