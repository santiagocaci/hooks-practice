import PropTypes from 'prop-types';
import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFomrSubmit = (event) => {
    event.preventDefault();

    if (description.length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFomrSubmit}>
      <input
        name='description'
        value={description}
        onChange={onInputChange}
        type='text'
        className='form-control'
        placeholder='New Todo'
      />
      <button type='submit' className='btn btn-primary mt-2'>
        Add Todo
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func,
};
