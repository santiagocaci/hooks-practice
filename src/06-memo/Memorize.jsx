import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={() => increment()}>
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className='btn btn-outline-primary'
      >
        SHOW/HIDDEN {JSON.stringify(show)}
      </button>
    </>
  );
};
