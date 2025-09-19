import { useState } from 'react';

const App = (props) => {
  const [value, setValue] = useState(10);

  return (
    <div>
      {value}
      <button onClick={() => console.log('clicked the button')}>
  button
</button>Added debug to click.
    </div>
  )
}

export default App;