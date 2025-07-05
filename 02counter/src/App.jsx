import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
// let counter=15;

const addValue = () => {
  if(counter>=20){
    console.log('Counter is already at maximum value');
    return;
  }
  console.log('add value clicked',Math.random());

  // counter=counter + 1;
  setCounter(counter + 1);
}

const removeValue = () => {
  if(counter <= 0) {
    console.log('Counter is already at zero');
    return;
  }
  console.log('remove value clicked',Math.random());    
  setCounter(counter - 1);
}


  return (
    <>
    <h1>chai aur react </h1>
    <h2>counter value : {counter}</h2>
    <button 
    onClick={addValue}
    >Add value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
