import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('pruebas en <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'I am Todo#1', done: false },
      { id: 2, description: 'I am Todo#2', done: false },
      { id: 3, description: 'I am Todo#3', done: true },
    ],
    todosCount: jest.fn().mockReturnValue(3),
    pendingTodosCount: jest.fn().mockReturnValue(2),
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('debe de mostrar el componente por defecto', () => {
    render(<TodoApp />);
    // screen.debug();

    expect(screen.getByText('I am Todo#1')).toBeTruthy();
    expect(screen.getByText('I am Todo#2')).toBeTruthy();
    expect(screen.getByText('I am Todo#3')).toBeTruthy();
  });
});
