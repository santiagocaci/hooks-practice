import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    //* los valores primitivos se extraen y se crean una nueva variable,
    //* si desestructuramos counter de result.current
    //* estariamos creando una nueva variable entonces y no la variable de result.current
    //* entonces no se actualizaria el counter de result sino un counter nuevo
    expect(result.current.counter).toBe(13);
  });

  test('debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(3);
    });

    expect(result.current.counter).toBe(6);
  });

  test('debe de resetear el valor del contador', () => {
    const { result } = renderHook(() => useCounter(30));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      increment(4);
      reset();
    });

    expect(result.current.counter).toBe(30);
  });
});
