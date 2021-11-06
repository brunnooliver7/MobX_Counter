import { observer } from 'mobx-react-lite';
import './App.css';

const App = observer((props) => {

  console.log(props.store)

  return (
    <>
      <h1>Counter</h1>
      <p>Value: {props.store.counter}</p>
      <button type="button" onClick={() => props.store.increment()}>Increment</button>
      <button type="button" onClick={() => props.store.decrement()}>Decrement</button>
    </>
  );
})

export default App;
