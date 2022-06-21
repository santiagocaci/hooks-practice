import { useCounter } from '../hooks/useCounter';

const CounterWhitCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>CounterWhitCustomHook: {counter}</h1>
      <hr />
      <button onClick={increment} className='btn btn-primary'>
        +1
      </button>
      <button onClick={reset} className='btn btn-primary'>
        reset
      </button>
      <button onClick={decrement} className='btn btn-primary'>
        -1
      </button>
    </>
  );
};

export default CounterWhitCustomHook;
