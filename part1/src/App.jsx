import { useState } from 'react';

const App = (props) => {
  const [value, setValue] = useState(10);

  const handleClick = () => {
    console.log('clicked the button');
    setValue(0);
  }


  return (
    <div>
      {value}
      <button onClick={ handleClick }>button</button>
    </div>
  )
}

export default App;