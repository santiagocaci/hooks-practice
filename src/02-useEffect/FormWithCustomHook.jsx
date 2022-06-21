// import { useEffect } from 'react';
import useForm from '../hooks/useForm';

const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='UserName'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='text'
        className='form-control mt-3'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      <input
        type='password'
        className='form-control mt-3'
        placeholder='Password'
        name='password'
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className='btn btn-primary mt-3'>
        BORRAR
      </button>
    </>
  );
};

export default FormWithCustomHook;
