import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

describe('pruebas en useForm', () => {
  const initialForm = {
    name: 'Santiago',
    email: 'santiago@google.com',
  };

  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  const newValue = 'Juan';
  test('debe de cambiar el nombre del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('debe de realizar el reset del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm(initialForm);
    });

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: { name: initialForm.name, email: initialForm.email },
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
});
