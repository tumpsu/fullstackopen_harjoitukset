import { useState } from 'react';

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    console.log('left before', updatedLeft);
    setLeft(updatedLeft);
    console.log('left after', left);
    setTotal(updatedLeft + right);
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}

        <p>{allClicks.join(' ')}</p>
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default App;