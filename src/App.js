import React, { useState } from 'react';
import Color from './component/color';
import './App.css';

function App() {
  const [text, setText] = useState('Press');
  const [color, setColor] = useState('color_red');

  const array = [<h1>Hello Hello Hello Hello</h1>,<h1>Hello Hello Hello</h1>,<h1>Hello Hello</h1>,<h1>Hello</h1>];
  const list = array.map((product,key) => <span key={key}>{product}</span>);
  const click = () =>{
    setText('Button Clicked');
    setColor('color_green');
  }
  return (
    <React.Fragment>
   {list}
   <Color color={color}/>
    <button type="button" onClick={click} className="">{text}</button>
   </React.Fragment>
  );
}

export default App;