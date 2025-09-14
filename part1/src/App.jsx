import { useState } from 'react';
const App = () => {
  const [ counter, setCounter ] = useState(0);


  const handleClick = () => {
    setCounter(counter + 1);
    console.log('clicked, counter is ' + counter);
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={() => { setCounter(0); console.log('Counter reset.'); }}> 
        zero
      </button>
    </div>
  )
}

export default App;