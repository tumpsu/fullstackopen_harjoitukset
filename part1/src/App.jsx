import { useState } from 'react';

const App = (props) => {
  const [value, setValue] = useState(10);

  return (
    <div>
      {value}
      <button onClick={() => setValue(0)}>button</button>
    </div>
  )
}

export default App;