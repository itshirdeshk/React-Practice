import { useState } from 'react';
import './App.css'

function App() {
  // const counter = 5;
  let [counter, setCounter] = useState(0);

  function addValue() {
    if (counter + 1 <= 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    }
  }

  function removeValue() {
    if (counter - 1 >= 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
