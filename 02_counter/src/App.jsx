import { useState } from 'react';
import './App.css'

function App() {
  // const counter = 5;
  let [counter, setCounter] = useState(0);

  function addValue() {
    if (counter + 1 <= 20) {
      // counter = counter + 1; 
      // What if we use setCounter four times,
      // then it only updates the value of counter by one beacuse useState works in batches

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      
      // Also we want to do this then setCounter provides us a callback in which we get prev value of the variable and if we increase this prev value then we can do this.
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      // console.log(counter);
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
