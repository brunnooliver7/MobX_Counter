import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>{counter}</span>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
