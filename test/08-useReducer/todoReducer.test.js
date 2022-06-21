import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    //* Se puede usar toBe en este caso por que el objeto pasa por referencia y retorna el mismo objeto guardado en memoria
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(0);
  });

  test('debe de realizar el toggle del todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
