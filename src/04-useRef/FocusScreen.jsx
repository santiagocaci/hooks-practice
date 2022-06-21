import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className='form-control'
        type='text'
        placeholder='ingrese su nombre'
      />

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
        className='btn btn-primary mt-2'
      >
        Set Focus
      </button>
    </>
  );
};
